  // app/exercise3/components/renderers/ErrorRenderer.tsx
  export function ErrorRenderer({ error }: { error: Error }) {
    return (
      <div className="p-4 border border-red-200 rounded bg-red-50">
        <h2 className="text-red-800 font-semibold">Error</h2>
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }