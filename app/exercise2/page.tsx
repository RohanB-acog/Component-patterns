import ProductList from "./components/ProductList";
import UserList from "./components/UserList";

// app/exercise2/page.tsx
export default function Exercise2() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Exercise 2: Generic Fetching Class
        </h1>
        <p className="text-gray-600 mb-6">
          This exercise demonstrates how to use inheritance and generic types
          to create a reusable data fetching system.
        </p>
        
        <div className="grid gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <UserList />
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }