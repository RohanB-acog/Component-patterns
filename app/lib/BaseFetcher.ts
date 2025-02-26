// app/lib/BaseFetcher.ts
export abstract class BaseFetcher<T> {
    protected url: string;
  
    constructor(url: string) {
      this.url = url;
    }
  
    async fetchData(): Promise<T> {
      try {
        const response = await fetch(this.url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return this.transformData(data);
      } catch (error) {
        throw this.handleError(error);
      }
    }
  
    protected handleError(error: unknown): Error {
      if (error instanceof Error) {
        return new Error(`Fetching failed: ${error.message}`);
      }
      return new Error('An unknown error occurred');
    }
  
    // Abstract method that child classes must implement
    protected abstract transformData(data: any): T;
  }