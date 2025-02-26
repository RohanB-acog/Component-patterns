
// app/exercise3/components/ProductList.tsx
'use client';
import { ProductDataFetcher } from '../data-fetchers/ProductDataFetcher';
import { useDataFetcher } from '../hooks/useFetcher';
import { ListRenderer } from './renderers/ListRenderer';
import { LoadingRenderer } from './renderers/LoadingRenderer';
import { ErrorRenderer } from './renderers/ErrorRenderer';
import { Product } from '../types';

export default function ProductList() {
  const { data, loading, error } = useDataFetcher(ProductDataFetcher); // Pass the class, not an instance

  if (loading) return <LoadingRenderer resource="products" />;
  if (error) return <ErrorRenderer error={error} />;
  if (!data) return null;

  return (
    <ListRenderer<Product>
      title="Products"
      items={data}
      renderItem={(product) => (
        <span>
          {product.name} - <span className="text-green-600">${product.price}</span>
        </span>
      )}
    />
  );
}
