export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Data Fetching Pattern Exercises
      </h1>
      <p className="text-gray-600 mb-4">
        Welcome to the data fetching exercises. This series will help you understand
        and implement better data fetching patterns in Next.js applications.
      </p>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
        <p>
          Select an exercise from the sidebar to begin. Each exercise builds upon
          the previous ones, introducing new concepts and improvements.
        </p>
      </div>
    </div>
  )
}