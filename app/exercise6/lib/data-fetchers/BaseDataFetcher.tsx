// app/exercise6/lib/data-fetchers/BaseDataFetcher.ts
import { BaseEntity } from "../../types";
// Remove the top-level imports
// import fs from 'fs';
// import path from 'path';

export abstract class BaseDataFetcher<T extends BaseEntity> {
  private baseUrl: string;
  private fetcherKey: string;
  private isServerSide: boolean;

  constructor(fetcherKey: string) {
    this.isServerSide = typeof window === 'undefined';
    this.baseUrl = this.isServerSide 
      ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000')
      : '';
    this.fetcherKey = fetcherKey;
  }

  protected get endpoint(): string {
    return `${this.baseUrl}/api/data?component=${this.fetcherKey}`;
  }

  async fetchData(): Promise<T[]> {
    try {
      // Detect if we're in an API route context
      const isApiRoute = this.isApiRoute();
      
      if (this.isServerSide && isApiRoute) {
        // We're in an API route - read the file directly to avoid circular references
        return await this.getDataFromFile();
      }

      // Regular fetch for client-side or server components
      const response = await fetch(this.endpoint, {
        ...(this.isServerSide && { cache: 'no-store' })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return this.transformData(data);
    } catch (error) {
      console.error("Fetch error:", error);
      throw this.handleError(error);
    }
  }

  private isApiRoute(): boolean {
    // Check if we're running in an API route
    const stack = new Error().stack || '';
    return stack.includes('/api/') || stack.includes('\\api\\');
  }

  // Read the JSON file directly when in an API route
  private async getDataFromFile(): Promise<T[]> {
    try {
      // Dynamically import Node.js modules
      const { readFileSync } = await import('fs');
      const { join } = await import('path');
      
      // Construct the path to the data file
      const filePath = join(process.cwd(), 'app', 'data', `${this.fetcherKey}.json`);
      
      // Read the file
      const fileData = readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(fileData);
      
      // Transform the data
      return this.transformData(jsonData);
    } catch (error) {
      console.error(`Error reading file for ${this.fetcherKey}:`, error);
      throw new Error(`Failed to read data file for ${this.fetcherKey}`);
    }
  }

  protected abstract transformData(data: unknown): T[];

  protected handleError(error: unknown): Error {
    return new Error(
      `Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}