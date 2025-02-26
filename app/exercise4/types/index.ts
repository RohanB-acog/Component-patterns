// app/exercise4/types/index.ts
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
  
  // Optional: Add more specific types if needed
  export interface FetchResponse<T> {
    data: T[];
    metadata?: {
      total: number;
      page: number;
    };
  }
  
  export interface FetchError {
    message: string;
    code?: string;
    status?: number;
  }