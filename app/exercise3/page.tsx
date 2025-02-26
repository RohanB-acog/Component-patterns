
  
  
  
  
  
 
  
  // app/exercise3/page.tsx
  import UserList from './components/UserList';
  import ProductList from './components/ProductList';
  
  export default function Exercise3Page() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Exercise 3: Decoupled Data Fetching
        </h1>
        <p className="text-gray-600 mb-6">
          This exercise demonstrates the separation of data fetching logic from UI rendering.
        </p>
        
        <div className="grid gap-8">
          <div className="border rounded-lg shadow-sm">
            <UserList />
          </div>
          
          <div className="border rounded-lg shadow-sm">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }