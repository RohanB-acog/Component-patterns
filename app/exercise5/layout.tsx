// app/exercise5/layout.tsx
import { initRegistry } from './lib/registry/initRegitry';

// Initialize registry at the app root
initRegistry();

export default function Exercise5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}