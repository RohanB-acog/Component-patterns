// app/exercise2/components/GenericList.tsx
'use client';
import { BaseFetcher } from '../../lib/BaseFetcher';
import { useFetcher } from '../../lib/hooks/useFetcher';

interface GenericListProps<T> {
  fetcher: BaseFetcher<T[]>;
  title: string;
  renderItem: (item: T) => React.ReactNode;
}

export default function GenericList<T extends { id: number }>({
  fetcher,
  title,
  renderItem
}: GenericListProps<T>) {
  const { data, loading, error } = useFetcher<T[]>(fetcher);

  if (loading) return <div>Loading {title.toLowerCase()}...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No {title.toLowerCase()} found</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul className="space-y-2">
        {data.map(item => (
          <li key={item.id} className="p-2 bg-gray-50 rounded">
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
