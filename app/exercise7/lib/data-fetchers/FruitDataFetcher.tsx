// app/exercise5/lib/data-fetchers/FruitDataFetcher.ts
import { Fruit } from "../../types";
import { BaseDataFetcher } from "./BaseDataFetcher";

export class FruitDataFetcher extends BaseDataFetcher<Fruit> {
  constructor() {
    super('fruits');
  }

  protected transformData(data: unknown): Fruit[] {
    if (!data || typeof data !== 'object' || !('fruits' in data)) {
      throw new Error('Invalid data format');
    }
    return (data as { fruits: Fruit[] }).fruits;
  }
}