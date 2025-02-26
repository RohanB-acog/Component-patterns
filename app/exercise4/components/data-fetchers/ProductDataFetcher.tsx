import { Product } from "../../types";
import { BaseDataFetcher } from "./BaseDataFetcher";

// app/exercise4/lib/data-fetchers/ProductDataFetcher.ts
export class ProductDataFetcher extends BaseDataFetcher<Product> {
  protected endpoint = '/api/products';

  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  protected transformData(data: any): Product[] {
    return data.products;
  }
}