// app/exercise5/components/ProductList/server.tsx
import { Product, WithFetchingProps } from '../../types';
import { createServerComponent } from '../../lib/hoc/createServerComponent';
import { ClientProductListRenderer } from './ClientRenderer';

function ProductListComponent(props: WithFetchingProps<Product>) {
  return <ClientProductListRenderer {...props} />;
}

export const ServerProductList = createServerComponent<Product>(ProductListComponent, 'products');
