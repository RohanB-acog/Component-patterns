// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Breadcrumb from './components/Breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Fetching Exercises',
  description: 'Learning advanced data fetching patterns in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          {/* Sidebar Navigation */}
          <nav className="w-64 bg-gray-100 p-4">
            <h1 className="text-xl font-bold mb-4">Exercises</h1>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/exercise1" 
                  className="block p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  Exercise 1: Code Duplication
                </Link>
              </li>
              <li>
                <Link 
                  href="/exercise2" 
                  className="block p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  Exercise 2: Generic Fetching Class
                </Link>
              </li>
              <li>
                <Link 
                  href="/exercise3" 
                  className="block p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  Exercise 3: Decouple Data fetching
                </Link>
              </li>

              <li>
                <Link 
                  href="/exercise4" 
                  className="block p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  Exercise 4: HOC's
                </Link>
              </li>

              <li>
                <Link 
                  href="/exercise5" 
                  className="block p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  Exercise 5: Centralized Registry
                </Link>
              </li>
              <li>
                <Link 
                  href="/exercise6" 
                  className="block p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  Exercise 6: Unified API Endpoint
                </Link>
                
              </li>
              <li>
                <Link 
                  href="/exercise7" 
                  className="block p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  Exercise 7: Final Version with MUI Integration 
                </Link>
                
              </li>
              {/* Add more exercise links as we progress */}
              {/* ... up to Exercise 7 */}
            </ul>
          </nav>

          {/* Main Content */}
          <main className="flex-1 p-8">
            <Breadcrumb/>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}