export type TCharacterType = 'Alive' | 'Dead' | 'unknown';
export type TCharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export type TCharacterStatus = 'Alive' | 'Dead' | 'unknown';

export interface ICharacter {
  id: number;
  name: string;
  status: TCharacterStatus;
  species: string;
  type: TCharacterType;
  gender: TCharacterGender;
  origin: ICharacterLocation; 
  location: ICharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface ICharacterLocation {
  name: string;
  url: string;
}
