// Update app/exercise5/components/MUIServerTables.tsx
import React from 'react';
import { ServerMUIUserTable } from './MUITable/UserTable/server';
import { ServerMUIProductTable } from './MUITable/ProductTable/server';
import { ServerMUIFruitTable } from './MUITable/FruitTable/server';

export function MUIServerTables() {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Material UI Tables (Server-side Fetching)</h2>
      <div className="space-y-6">
        <ServerMUIUserTable />
        <ServerMUIProductTable />
        <ServerMUIFruitTable />
      </div>
    </div>
  );
}
