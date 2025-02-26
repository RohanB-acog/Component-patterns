// app/exercise5/components/MUITable/ProductTable/MUIProductTableAdapter.tsx
'use client';
import React from 'react';
import { Product, WithFetchingProps } from '../../../types';
import { MUITable } from '../MUITable';

// Define columns for the product table
const productColumns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'name', label: 'Product Name', minWidth: 170 },
  { id: 'price', 
    label: 'Price', 
    minWidth: 100, 
    align: 'right' as const,
    format: (value: number) => `$${value.toFixed(2)}` 
  },
  { id: 'description', label: 'Description', minWidth: 200 },
];

export function MUIProductTableAdapter({ data = [], loading, error }: WithFetchingProps<Product>) {
  if (loading) return <div>Loading products table...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <MUITable<Product>
      data={data}
      columns={productColumns}
      title="Products (Material UI)"
    />
  );
}