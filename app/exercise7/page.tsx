// app/exercise5/page.tsx
import { Suspense } from 'react';
import { ServerUserList } from './components/UserList/server';
import { ServerProductList } from './components/ProductList/server';
import { ServerFruitList } from './components/FruitList';
import { ClientLists } from './components/ClientLists';
import { MUIClientTables } from './components/MUIClientTables';
import { MUIServerTables } from './components/MUIServerTables';

export default function Exercise7Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Exercise 7: Final Version with comprised of all prior features along with MUI integration
      </h1>

      <div className="grid gap-8">
        {/* Original Server Components */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Server-side Fetching</h2>
          <div className="space-y-6">
            <Suspense fallback={<div>Loading users...</div>}>
              <ServerUserList />
            </Suspense>
            <Suspense fallback={<div>Loading products...</div>}>
              <ServerProductList />
            </Suspense>
            <Suspense fallback={<div>Loading products...</div>}>
              <ServerFruitList />
            </Suspense>
          </div>
        </div>

        {/* Original Client Components */}
        <ClientLists />
        
        {/* Material UI Server Components */}
        <Suspense fallback={<div>Loading MUI server components...</div>}>
          <MUIServerTables />
        </Suspense>
        
        {/* Material UI Client Components */}
        <MUIClientTables />
      </div>
    </div>
  );
}