// Fix the route.ts file
// app/api/data/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { FetcherRegistry } from '@/app/exercise7/lib/registry/FetcherRegistery';
import { initRegistry } from '@/app/exercise7/lib/registry/initRegitry';

// Initialize registry on the server side
initRegistry();

export async function GET(request: NextRequest) {
  // Get the component parameter from the URL
  const searchParams = request.nextUrl.searchParams;
  const component = searchParams.get('component');
  
  if (!component) {
    return NextResponse.json({ error: 'Missing component parameter' }, { status: 400 });
  }

  try {
    // Get the appropriate fetcher from the registry
    const registry = FetcherRegistry.getInstance();
    const FetcherClass = registry.getFetcher(component);
    
    // Create an instance of the fetcher WITHOUT passing arguments
    const fetcher = new FetcherClass(component);
    
    // Use the fetcher to get the data
    const data = await fetcher.fetchData();
    
    // Return the data
    return NextResponse.json({ [component]: data });
  } catch (error) {
    console.error(`Error fetching data for ${component}:`, error);
    return NextResponse.json(
      { error: `Error fetching data for ${component}` }, 
      { status: 500 }
    );
  }
}