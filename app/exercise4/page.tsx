

// app/exercise4/page.tsx remains the same
// app/exercise4/page.tsx
import { Suspense } from 'react';
import { ServerUserList } from './components/UserList/server';
import { ClientUserList } from './components/UserList/client';
import { ServerProductList } from './components/ProductList/server';
import { ClientProductList } from './components/ProductList/client';

export default function Exercise4Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Exercise 4: Server & Client Fetching
      </h1>

      <div className="grid gap-8">
        {/* Server-side fetching examples */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Server-side Fetching</h2>
          <div className="space-y-6">
            <Suspense fallback={<div>Loading users...</div>}>
              <ServerUserList />
            </Suspense>
            <Suspense fallback={<div>Loading products...</div>}>
              <ServerProductList />
            </Suspense>
          </div>
        </div>

        {/* Client-side fetching examples */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Client-side Fetching</h2>
          <div className="space-y-6">
            <ClientUserList />
            <ClientProductList />
          </div>
        </div>
      </div>
    </div>
  );
}