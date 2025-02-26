// app/exercise5/components/MUITable/FruitTable/MUIFruitTableAdapter.tsx
'use client';
import React from 'react';
import { Fruit, WithFetchingProps } from '../../../types';
import { MUITable } from '../MUITable';

// Define columns for the fruit table
const fruitColumns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'name', label: 'Fruit Name', minWidth: 170 },
  { id: 'richIn', label: 'Rich In', minWidth: 170 }
];

export function MUIFruitTableAdapter({ data = [], loading, error }: WithFetchingProps<Fruit>) {
  if (loading) return <div>Loading fruits table...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <MUITable<Fruit>
      data={data}
      columns={fruitColumns}
      title="Fruits (Material UI)"
    />
  );
}