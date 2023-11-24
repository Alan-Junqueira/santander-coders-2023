export interface IDefaultRickAndMortyApiReturn<T> {
  info: TRickAndMortyApiInfo
  results: T[];
}

export type TRickAndMortyApiInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null
}
