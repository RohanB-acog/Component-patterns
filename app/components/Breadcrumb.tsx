// app/components/Breadcrumb.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(path => path)

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      {paths.map((path, index) => (
        <div key={path} className="flex items-center">
          <span className="mx-2">/</span>
          <Link 
            href={`/${paths.slice(0, index + 1).join('/')}`}
            className="hover:text-blue-600 capitalize"
          >
            {path.replace(/-/g, ' ')}
          </Link>
        </div>
      ))}
    </div>
  )
}