export interface Gym {
  id: string;
  name: string;
  city: 'Cotonou' | 'Abomey-Calavi' | 'Porto-Novo' | 'Parakou';
  district: string;
  address: string;
  image: string;
  pricePerSession: number; // in FCFA
  pricePerMonth: number; // in FCFA
  priceStudent?: number;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  rating: number;
  reviewsCount: number;
  hours: string;
  isOpenSunday: boolean;
  isAirConditioned: boolean;
  hasParking: boolean;
  hasPool?: boolean;
  hasWomenZone?: boolean;
  amenities: string[];
  equipment: ('musculation' | 'cardio' | 'crossfit' | 'boxe' | 'cours_collectifs')[];
  description: string;
}

export interface Coach {
  id: string;
  name: string;
  nickname?: string;
  city: string;
  specialty: string;
  experienceYears: number;
  pricePerSession: number;
  priceMonthly: number;
  phone: string;
  whatsapp: string;
  bio: string;
  qualifications: string[];
  avatar: string;
}

export interface Exercise {
  id: string;
  name: string;
  targetMuscle: string;
  equipment: 'poids_corps' | 'halteres' | 'barre' | 'machine' | 'elastique';
  sets: number;
  reps: string;
  restSeconds: number;
  instructions: string;
  tip: string;
}

export interface WorkoutProgram {
  id: string;
  title: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  location: 'Maison (Sans matériel)' | 'Salle de Sport';
  goal: 'Perte de gras' | 'Prise de masse' | 'Remise en forme' | 'Force';
  durationMin: number;
  exercises: Exercise[];
}

export interface LocalFoodItem {
  id: string;
  name: string;
  category: 'Féculent' | 'Protéine' | 'Plat complet' | 'Collation / Fruit';
  portion: string;
  calories: number;
  protein: number; // in g
  carbs: number; // in g
  fat: number; // in g
  fitnessTip: string;
}
