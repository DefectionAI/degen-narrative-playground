
export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  traits: string[];
  image: string;
  popularity: number;
  level: number;
  unlocked: boolean;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  rewards: string[];
  duration: string;
  characters: string[];
  unlocked: boolean;
  image: string;
  participants: number;
}
