export abstract class BaseDataFetcher<T> {
  protected abstract endpoint: string;

  constructor(private baseUrl?: string) {
    // In server component, we need full URL
    if (typeof window === 'undefined') {
      this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    }
  }

  async fetchData(): Promise<T[]> {
    try {
      const url = this.baseUrl 
        ? `${this.baseUrl}${this.endpoint}`
        : this.endpoint;

      const response = await fetch(url, {
        // Add cache options for server-side fetching
        ...(typeof window === 'undefined' && {
          cache: 'no-store', // or 'force-cache' based on your needs
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
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