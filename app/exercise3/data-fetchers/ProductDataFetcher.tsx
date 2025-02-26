
// app/exercise3/data-fetchers/ProductDataFetcher.ts
import { Product } from '../types';
import { BaseDataFetcher } from './BaseDataFetcher';

export class ProductDataFetcher extends BaseDataFetcher<Product> {
  protected endpoint = '/api/products';

  protected transformData(data: any): Product[] {
    return data.products;
  }
}