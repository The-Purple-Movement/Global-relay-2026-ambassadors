import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
export const BUCKET_NAME = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Uploads an image file to Supabase Storage bucket.
 * Returns the public URL of the uploaded image.
 */
export async function uploadAmbassadorPhoto(file: File): Promise<string> {
  if (!supabase || !isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Please add VITE_SUPABASE_ANON_KEY to your .env file.');
  }

  // Generate unique file path: e.g. "photos/1727800000000-avatar.jpg"
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const fileName = `${Date.now()}-${sanitizedName}`;
  const filePath = `cohort-2026/${fileName}`;

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
