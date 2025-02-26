import { BaseEntity } from "../../types";

// app/exercise5/lib/data-fetchers/BaseDataFetcher.ts
export abstract class BaseDataFetcher<T extends BaseEntity> {
  private baseUrl: string;
  protected abstract getEndpoint(): string;

  constructor() {
    this.baseUrl = typeof window === 'undefined' 
      ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000')
      : '';
  }

  protected get endpoint(): string {
    return `${this.baseUrl}${this.getEndpoint()}`;
  }

  async fetchData(): Promise<T[]> {
    try {
      const response = await fetch(this.endpoint, {
        ...(typeof window === 'undefined' && {
          cache: 'no-store'
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

  protected abstract transformData(data: unknown): T[];

  protected handleError(error: unknown): Error {
    return new Error(
      `Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}
