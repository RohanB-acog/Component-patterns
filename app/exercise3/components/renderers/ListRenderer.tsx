  // app/exercise3/components/renderers/ListRenderer.tsx
  interface ListRendererProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T) => React.ReactNode;
  }
  
  export function ListRenderer<T extends { id: number }>({
    title,
    items,
    renderItem,
  }: ListRendererProps<T>) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id} className="p-2 bg-gray-50 rounded">
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  