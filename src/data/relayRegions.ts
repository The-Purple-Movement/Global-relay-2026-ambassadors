export interface RelayData {
  id: number;
  region: string;
  segment: string;
  producer: string;
  utc: string;
}

export const RELAY_DATA: RelayData[] = [
  {
    id: 1,
    region: 'Kyoto Opening Ceremony',
    segment: 'Opening',
    producer: 'Jun Suto',
    utc: 'Oct 2 06:00–07:00'
  },
  {
    id: 2,
    region: 'Australia, New Zealand & South Pacific',
    segment: 'Oceania',
    producer: 'Christina Gerakiteys',
    utc: 'Oct 2 07:00–09:00'
  },
  {
    id: 3,
    region: 'Japan, Korea, Taiwan & Northeast Asia',
    segment: 'East Asia',
    producer: 'Jun Suto',
    utc: 'Oct 2 09:00–11:00'
  },
  {
    id: 4,
    region: 'Southeast Asia (aka Youth produced segment)',
    segment: 'Youth (South Asia)',
    producer: 'Aditi Singh',
    utc: 'Oct 2 11:00–13:00'
  },
  {
    id: 5,
    region: 'South Asia',
    segment: 'South Asia',
    producer: 'Deepu S Nath',
    utc: 'Oct 2 13:00–15:00'
  },
  {
    id: 6,
    region: 'Middle East, Caucasus & Central Asia',
    segment: 'GCC',
    producer: 'Walied Albasheer',
    utc: 'Oct 2 15:00–17:00'
  },
  {
    id: 7,
    region: 'East Africa, Southern Africa & Central Europe',
    segment: 'Africa',
    producer: 'Lee Kironget, Brainy',
    utc: 'Oct 2 17:00–19:00'
  },
  {
    id: 8,
    region: 'UK, Ireland, Iberia & West Africa',
    segment: 'Europe',
    producer: 'Fabrizio Gramuglio',
    utc: 'Oct 2 19:00–21:00'
  },
  {
    id: 9,
    region: 'Eastern & Southern South America & Caribbean',
    segment: 'Caribian & LATAM',
    producer: 'Julieta Reyes',
    utc: 'Oct 2 21:00–23:00'
  },
  {
    id: 10,
    region: 'Eastern North America & Northern South America',
    segment: 'North America',
    producer: 'Ani Chahal Honan',
    utc: 'Oct 2 23:00–01:00'
  },
  {
    id: 11,
    region: 'Central North America & Mexico',
    segment: 'North America',
    producer: 'Ani Chahal Honan',
    utc: 'Oct 3 01:00–03:00'
  },
  {
    id: 12,
    region: 'North America',
    segment: 'North America',
    producer: 'Ani Chahal Honan',
    utc: 'Oct 3 03:00–05:00'
  },
  {
    id: 13,
    region: 'Hawai\'i, Alaska & Pacific Islands',
    segment: 'Pacific Islands (Ocean)',
    producer: 'Jun Suto',
    utc: 'Oct 3 05:00–07:00'
  },
  {
    id: 14,
    region: 'Kyoto Closing Ceremony',
    segment: 'Closing',
    producer: 'Jun Suto',
    utc: 'Oct 3 07:00–08:00'
  }
];

export interface RegionData {
  id: number;
  regionNumber: string;
  name: string;
  cities: string;
  timeUtc: string;
  coordinates: [number, number]; // [xPercent, yPercent] for SVG map
  themeFocus: string;
  hosts: string;
}

export const RELAY_REGIONS: RegionData[] = [
  {
    id: 1,
    regionNumber: "01",
    name: "Kyoto & Japan",
    cities: "Kyoto, Tokyo",
    timeUtc: "00:00 - 02:00 UTC",
    coordinates: [82, 38],
    themeFocus: "Opening Ceremony, Futokoro (懐) Foundation & Cultural Origins",
    hosts: "Jun Suto & Kyoto Research Circle",
  },
  {
    id: 2,
    regionNumber: "02",
    name: "East Asia",
    cities: "Seoul, Taipei",
    timeUtc: "02:00 - 04:00 UTC",
    coordinates: [79, 36],
    themeFocus: "Human-Centred Interface Design & Generational Harmony",
    hosts: "East Asia AI Arts Collective",
  },
  {
    id: 3,
    regionNumber: "03",
    name: "Asia-Pacific & Oceania",
    cities: "Singapore, Sydney",
    timeUtc: "04:00 - 06:00 UTC",
    coordinates: [83, 72],
    themeFocus: "Oceanic Ecosystem Intelligence & Community Stewardship",
    hosts: "Pacific Sustainability Alliance",
  },
  {
    id: 4,
    regionNumber: "04",
    name: "South Asia",
    cities: "Mumbai, New Delhi, Bengaluru",
    timeUtc: "06:00 - 08:00 UTC",
    coordinates: [68, 45],
    themeFocus: "Equitable Access, Multilingual AI & Rural Health Systems",
    hosts: "Bharat Compassion Initiative",
  },
  {
    id: 5,
    regionNumber: "05",
    name: "Middle East",
    cities: "Dubai, Riyadh, Doha",
    timeUtc: "08:00 - 10:00 UTC",
    coordinates: [59, 43],
    themeFocus: "Cultural Preservation & Ethical AI Governance Frameworks",
    hosts: "Gulf Center for Humane Tech",
  },
  {
    id: 6,
    regionNumber: "06",
    name: "Sub-Saharan Africa",
    cities: "Nairobi, Kigali, Cape Town",
    timeUtc: "10:00 - 12:00 UTC",
    coordinates: [56, 62],
    themeFocus: "Indigenous Knowledge Systems, Food Security & Youth Innovation",
    hosts: "Pan-African AI Collaborative",
  },
  {
    id: 7,
    regionNumber: "07",
    name: "Central Europe",
    cities: "Berlin, Geneva, Vienna",
    timeUtc: "12:00 - 14:00 UTC",
    coordinates: [51, 31],
    themeFocus: "Policy, Human Dignity Charters & Responsible Model Auditing",
    hosts: "European Compassion Forum",
  },
  {
    id: 8,
    regionNumber: "08",
    name: "Western Europe & West Africa",
    cities: "London, Accra, Paris",
    timeUtc: "14:00 - 16:00 UTC",
    coordinates: [46, 30],
    themeFocus: "Cross-Continental Dialogue & Inclusive Technology Pipelines",
    hosts: "Global Atlantic Research Group",
  },
  {
    id: 9,
    regionNumber: "09",
    name: "Latin America",
    cities: "São Paulo, Buenos Aires, Bogotá",
    timeUtc: "16:00 - 18:00 UTC",
    coordinates: [33, 70],
    themeFocus: "Biodiversity Conservation & Community-Driven Ethics",
    hosts: "Ibero-American Innovation Council",
  },
  {
    id: 10,
    regionNumber: "10",
    name: "North America East",
    cities: "New York, Toronto, Boston",
    timeUtc: "18:00 - 20:00 UTC",
    coordinates: [28, 36],
    themeFocus: "Academic Alliances, Institutional Governance & Civic AI",
    hosts: "North American Policy Lab",
  },
  {
    id: 11,
    regionNumber: "11",
    name: "North America West",
    cities: "San Francisco, Vancouver, Seattle",
    timeUtc: "20:00 - 22:00 UTC",
    coordinates: [18, 35],
    themeFocus: "Frontier Foundation Models, Alignment & Empathy Systems",
    hosts: "Pacific Coast Humanity Consortium",
  },
  {
    id: 12,
    regionNumber: "12",
    name: "Pacific Crossing & Kyoto Return",
    cities: "Honolulu, Kyoto",
    timeUtc: "22:00 - 24:00 UTC",
    coordinates: [10, 44],
    themeFocus: "Closing Synthesis, Global Alliance Charter & Relay Homecoming",
    hosts: "Global Forum Secretariat & Kyoto Host Committee",
  }
];
