// app/exercise5/types/index.ts
export interface BaseEntity {
  id: number;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
}

export interface Product extends BaseEntity {
  name: string;
  price: number;
}

export interface WithFetchingProps<T> {
  data?: T[];
  loading?: boolean;
  error?: Error | null;
}

export interface FetcherConfig {
  endpoint: string;
  baseUrl?: string;
}