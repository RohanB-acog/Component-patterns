// app/exercise5/components/MUITable/ProductTable/server.tsx
import { createServerComponent } from '../../../lib/hoc/createServerComponent';
import { MUIProductTableAdapter } from '../MUIProductTable/MUIProductTableAdaptor';
import { Product, WithFetchingProps } from '../../../types';

// Create server-side version
function ServerProductTableComponent(props: WithFetchingProps<Product>) {
  return <MUIProductTableAdapter {...props} />;
}

export const ServerMUIProductTable = createServerComponent<Product>(ServerProductTableComponent, 'products');