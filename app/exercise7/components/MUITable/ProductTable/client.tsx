// app/exercise5/components/MUITable/ProductTable/client.tsx
'use client';
import { createClientComponent } from '../../../lib/hoc/createClientComponent';
import { MUIProductTableAdapter } from '../MUIProductTable/MUIProductTableAdaptor';
import { Product } from '../../../types';

// Create client-side version
export const ClientMUIProductTable = createClientComponent<Product>(MUIProductTableAdapter, 'products');