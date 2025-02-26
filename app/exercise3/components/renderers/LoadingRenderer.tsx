// app/exercise3/components/renderers/LoadingRenderer.tsx
export function LoadingRenderer({ resource }: { resource: string }) {
    return (
      <div className="p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
        <p className="mt-2 text-gray-500">Loading {resource}...</p>
      </div>
    );
  }