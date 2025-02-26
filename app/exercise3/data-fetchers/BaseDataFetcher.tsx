 // app/exercise3/data-fetchers/BaseDataFetcher.ts
 export interface FetchState<T> {
    data: T[] | null;
    loading: boolean;
    error: Error | null;
  }
  
  export abstract class BaseDataFetcher<T> {
    protected abstract endpoint: string;
  
    async fetchData(): Promise<T[]> {
      try {
        const response = await fetch(this.endpoint);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return this.transformData(data);
      } catch (error) {
        throw this.handleError(error);
      }
    }
  
    protected abstract transformData(data: any): T[];
  
    protected handleError(error: unknown): Error {
      return new Error(
        `Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }