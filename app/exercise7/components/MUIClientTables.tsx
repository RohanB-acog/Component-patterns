// Update app/exercise5/components/MUIClientTables.tsx
'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ClientMUIUserTable = dynamic(
  () => import('./MUITable/UserTable/Client').then(mod => mod.ClientMUIUserTable),
  { ssr: false }
);

const ClientMUIProductTable = dynamic(
  () => import('./MUITable/ProductTable/client').then(mod => mod.ClientMUIProductTable),
  { ssr: false }
);

const ClientMUIFruitTable = dynamic(
  () => import('./MUITable/FruitTable/client').then(mod => mod.ClientMUIFruitTable),
  { ssr: false }
);

export function MUIClientTables() {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Material UI Tables (Client-side Fetching)</h2>
      <div className="space-y-6">
        <ClientMUIUserTable />
        <ClientMUIProductTable />
        <ClientMUIFruitTable />
      </div>
    </div>
  );
}
