// app/exercise5/components/ProductList/ClientRenderer.tsx
'use client';
import { Product, WithFetchingProps } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';
import { ProductItemRenderer } from '../renderers/ItemRenderers';

export function ClientProductListRenderer(props: WithFetchingProps<Product>) {
  return (
    <ListRenderer<Product>
      {...props}
      title="Products"
      renderItem={ProductItemRenderer}
    />
  );
}
