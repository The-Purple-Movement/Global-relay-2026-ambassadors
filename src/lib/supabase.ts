import { createClient } from '@supabase/supabase-js';
import type { Ambassador } from '../data/ambassadorsData';

const DEFAULT_SUPABASE_URL = 'https://vrqdjggzysvtpilbdjid.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWRqZ2d6eXN2dHBpbGJkamlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4Njk0MjIsImV4cCI6MjEwNjQ0NTQyMn0.32l3CFNH-3wT6nlwE2uTpGzp3R7z8oNWIhDwtT2HGZo';
const DEFAULT_STORAGE_BUCKET = 'ambassador-photos';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;
export const BUCKET_NAME = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || DEFAULT_STORAGE_BUCKET;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const LOCAL_STORAGE_KEY = 'ai_compassion_ambassadors';

/**
 * Uploads an image file to Supabase Storage bucket.
 * Returns the public URL of the uploaded image.
 */
export async function uploadAmbassadorPhoto(file: File): Promise<string> {
  if (!supabase || !isSupabaseConfigured) {
    throw new Error('Supabase is not configured.');
  }

  // Generate unique file path: e.g. "cohort-2026/photos/1727800000000-avatar.jpg"
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const fileName = `${Date.now()}-${sanitizedName}`;
  const filePath = `cohort-2026/photos/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) {
    throw uploadError;
  }

  const { data: publicUrlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

/**
 * Saves an ambassador record both to local storage cache and to Supabase
 * (Storage bucket JSON file and database table if present).
 */
export async function saveAmbassador(ambassador: Ambassador): Promise<void> {
  // 1. Immediately cache in localStorage
  try {
    const rawLocal = localStorage.getItem(LOCAL_STORAGE_KEY);
    const existing: Ambassador[] = rawLocal ? JSON.parse(rawLocal) : [];
    const updated = [ambassador, ...existing.filter((a) => a.id !== ambassador.id)];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Could not cache ambassador to localStorage:', err);
  }

  if (!supabase || !isSupabaseConfigured) {
    return;
  }

  // 2. Persist JSON metadata into Supabase Storage
  try {
    const jsonBlob = new Blob([JSON.stringify(ambassador)], { type: 'application/json' });
    const storagePath = `cohort-2026/ambassadors/${ambassador.id}.json`;
    const { error: storageError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, jsonBlob, {
        upsert: true,
      });

    if (storageError) {
      console.warn('Supabase storage upload error for ambassador record:', storageError);
    }
  } catch (err) {
    console.warn('Failed saving ambassador to storage bucket:', err);
  }

  // 3. Attempt DB insert if table exists
  try {
    await supabase.from('ambassadors').insert([
      {
        id: ambassador.id,
        name: ambassador.name,
        region_number: ambassador.regionNumber,
        region_name: ambassador.regionName,
        country: ambassador.country,
        city: ambassador.city,
        role: ambassador.role,
        bio: ambassador.bio,
        image_url: ambassador.imageUrl,
      },
    ]);
  } catch {
    // If table doesn't exist, storage bucket acts as the source of truth
  }
}

/**
 * Fetches all persisted ambassadors.
 * Checks DB table first, falls back to Supabase storage bucket JSON files,
 * and merges with local offline cache.
 */
export async function fetchAmbassadors(): Promise<Ambassador[]> {
  const localList: Ambassador[] = (() => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  })();

  if (!supabase || !isSupabaseConfigured) {
    return localList;
  }

  let remoteList: Ambassador[] = [];

  // 1. Try fetching from database table
  try {
    const { data: dbData, error: dbError } = await supabase
      .from('ambassadors')
      .select('*')
      .order('created_at', { ascending: false });

    if (!dbError && dbData && dbData.length > 0) {
      remoteList = dbData.map((row: Record<string, unknown>) => ({
        id: String(row.id),
        name: String(row.name || ''),
        regionNumber: String(row.region_number || row.regionNumber || '01'),
        regionName: String(row.region_name || row.regionName || 'Global'),
        country: String(row.country || 'Global'),
        city: String(row.city || ''),
        role: String(row.role || ''),
        bio: String(row.bio || ''),
        imageUrl: String(row.image_url || row.imageUrl || ''),
      }));
    }
  } catch {
    // DB query failed or table absent, fallback to storage
  }

  // 2. If DB table has nothing, fetch from Storage bucket
  if (remoteList.length === 0) {
    try {
      const { data: files, error: listError } = await supabase.storage
        .from(BUCKET_NAME)
        .list('cohort-2026/ambassadors', { limit: 200 });

      if (!listError && files && files.length > 0) {
        const jsonFiles = files.filter((f) => f.name.endsWith('.json'));
        const parsedItems = await Promise.all(
          jsonFiles.map(async (file) => {
            try {
              const { data } = await supabase.storage
                .from(BUCKET_NAME)
                .download(`cohort-2026/ambassadors/${file.name}`);
              if (!data) return null;
              const text = await data.text();
              return JSON.parse(text) as Ambassador;
            } catch {
              return null;
            }
          })
        );
        remoteList = parsedItems.filter((a): a is Ambassador => Boolean(a && a.id && a.name));
      }
    } catch (err) {
      console.warn('Error fetching ambassadors from storage:', err);
    }
  }

  // 3. Merge remote and local (remote takes precedence, deduplicated by id)
  const map = new Map<string, Ambassador>();
  for (const item of remoteList) {
    if (item.id) map.set(item.id, item);
  }
  for (const item of localList) {
    if (item.id && !map.has(item.id)) {
      map.set(item.id, item);
    }
  }

  const combined = Array.from(map.values());

  // Update local cache
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(combined));
  } catch {
    // ignore
  }

  return combined;
}
