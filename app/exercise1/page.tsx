import UserList from './components/UserList'
import ProductList from './components/ProductsList'

export default function Exercise1() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Exercise 1: Understanding Code Duplication
      </h1>
      <p className="text-gray-600 mb-6">
        This exercise demonstrates the problems with duplicated data fetching logic
        in components.
      </p>
      
      <div className="grid gap-8">
        <div className="p-4 border rounded-lg">
          <UserList />
        </div>
        
        <div className="p-4 border rounded-lg">
          <ProductList />
        </div>
      </div>
    </div>
  )
}