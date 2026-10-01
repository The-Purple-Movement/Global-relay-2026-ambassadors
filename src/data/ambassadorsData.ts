export interface Ambassador {
  id: string;
  name: string;
  regionNumber: string;
  regionName: string;
  country: string;
  city: string;
  role: string;
  bio: string;
  imageUrl: string;
  featured?: boolean;
}

export const INITIAL_AMBASSADORS: Ambassador[] = [
  {
    id: "amb-1",
    name: "Dr. Amani Mwangi",
    regionNumber: "06",
    regionName: "Sub-Saharan Africa",
    country: "Kenya",
    city: "Nairobi",
    role: "Health Informatics & AI Ethics Lead",
    bio: "Advancing ethical healthcare models across East Africa with deep focus on community-first diagnostic tools.",
    imageUrl: "/images/ambassador-1.jpg",
    featured: true,
  },
  {
    id: "amb-2",
    name: "Kenji Takahashi",
    regionNumber: "01",
    regionName: "Kyoto & Japan",
    country: "Japan",
    city: "Kyoto",
    role: "Human-Centered Design Architect",
    bio: "Exploring traditional Japanese aesthetics of Futokoro to build respectful and quiet interfaces for autonomous agents.",
    imageUrl: "/images/ambassador-2.jpg",
    featured: true,
  },
  {
    id: "amb-3",
    name: "Clara Lindqvist",
    regionNumber: "07",
    regionName: "Central Europe",
    country: "Germany",
    city: "Berlin",
    role: "Policy Researcher & Digital Rights Fellow",
    bio: "Working on European AI governance frameworks that prioritize civic dignity and transparent algorithmic decision-making.",
    imageUrl: "/images/ambassador-3.jpg",
    featured: true,
  },
  {
    id: "amb-4",
    name: "Mateo Silva",
    regionNumber: "09",
    regionName: "Latin America",
    country: "Brazil",
    city: "São Paulo",
    role: "Ecological Intelligence Strategist",
    bio: "Deploying sensor-guided AI for Amazon rainforest bio-acoustics and empowering indigenous forest stewards.",
    imageUrl: "/images/ambassador-role.jpg",
  },
  {
    id: "amb-5",
    name: "Priya Sharma",
    regionNumber: "04",
    regionName: "South Asia",
    country: "India",
    city: "Bengaluru",
    role: "Multilingual NLP Engineer",
    bio: "Building vernacular language models to bridge the digital divide for over 500 million non-English speakers.",
    imageUrl: "/images/ambassador-1.jpg",
  },
  {
    id: "amb-6",
    name: "Tariq Al-Mansoor",
    regionNumber: "05",
    regionName: "Middle East",
    country: "United Arab Emirates",
    city: "Dubai",
    role: "Cultural Preservation Technologist",
    bio: "Digitizing historical manuscripts and oral histories using generative archives that honor regional heritage.",
    imageUrl: "/images/ambassador-2.jpg",
  },
  {
    id: "amb-7",
    name: "Elena Rostova",
    regionNumber: "08",
    regionName: "Western Europe & West Africa",
    country: "United Kingdom",
    city: "London",
    role: "Computational Sociologist",
    bio: "Investigating the social impact of human-AI collaboration on collective empathy in urban communities.",
    imageUrl: "/images/ambassador-3.jpg",
  },
  {
    id: "amb-8",
    name: "Marcus Vance",
    regionNumber: "11",
    regionName: "North America West",
    country: "United States",
    city: "San Francisco",
    role: "Humane Systems Engineer",
    bio: "Focusing on algorithmic alignment architectures that reflect universal compassion and cross-cultural values.",
    imageUrl: "/images/ambassador-role.jpg",
  },
];
