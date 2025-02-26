// app/exercise5/components/renderers/ListRenderer.tsx
'use client';
import { WithFetchingProps } from '../../types';

interface ListRendererProps<T> extends WithFetchingProps<T> {
  title: string;
  renderItem: (item: T) => React.ReactNode;
}

export function ListRenderer<T extends { id: number }>({
  title,
  data = [],
  loading,
  error,
  renderItem
}: ListRendererProps<T>) {
  if (loading) return <div>Loading {title.toLowerCase()}...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="space-y-2">
        {data.map(item => (
          <li key={item.id} className="p-3 bg-gray-50 rounded">
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
