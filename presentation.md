# Next.js Data Fetching Architecture

## Overview

This document outlines the architecture for a Next.js application that implements a modular, maintainable approach to data fetching on both client and server sides. The system uses a registry pattern combined with Higher Order Components (HOCs) to provide a flexible, reusable way to fetch and display data.

## Architecture Diagram

```mermaid
graph TD
    subgraph "Client Component"
        CC[Client Component] --> CCC[createClientComponent HOC]
        CCC --> FR1[Fetcher Registry]
        FR1 --> DF1[Data Fetcher]
        DF1 --> API1[API]
    end
    
    subgraph "Server Component"
        SC[Server Component] --> SCC[createServerComponent HOC]
        SCC --> FR2[Fetcher Registry]
        FR2 --> DF2[Data Fetcher]
        DF2 --> API2[API]
    end
    
    subgraph "Registry System"
        FRegistry[Fetcher Registry]
        InitRegistry[Init Registry]
        DataFetchers[Data Fetchers]
        InitRegistry --> FRegistry
        FRegistry --> DataFetchers
    end
    
    subgraph "UI Components"
        MUITable[MUI Table]
        Renderers[List Renderers]
        ItemRenderers[Item Renderers]
    end
    
    CC --> Renderers
    SC --> Renderers
    Renderers --> ItemRenderers
    CC --> MUITable
    SC --> MUITable
```

## Data Flow

```mermaid
sequenceDiagram
    participant Client
    participant ServerComponent
    participant Registry
    participant DataFetcher
    participant API
    
    Client->>ServerComponent: Request page
    ServerComponent->>Registry: Get appropriate fetcher
    Registry->>DataFetcher: Initialize fetcher
    DataFetcher->>API: Fetch data
    API->>DataFetcher: Return data
    DataFetcher->>ServerComponent: Process & transform data
    ServerComponent->>Client: Render component with data
    
    note over Client,API: Client-side flow similar but uses React hooks
```

## Component Structure

```mermaid
classDiagram
    class BaseEntity {
        +id: number
    }
    
    class User {
        +name: string
        +email: string
    }
    
    class Product {
        +name: string
        +price: number
        +description: string
    }
    
    class Fruit {
        +name: string
        +richIn: string
    }
    
    BaseEntity <|-- User
    BaseEntity <|-- Product
    BaseEntity <|-- Fruit
    
    class BaseDataFetcher {
        +baseUrl: string
        +fetcherKey: string
        +fetchData()
        #transformData(data)
        #handleError(error)
    }
    
    class UserDataFetcher {
        #transformData(data)
    }
    
    class ProductDataFetcher {
        #transformData(data)
    }
    
    class FruitDataFetcher {
        #transformData(data)
    }
    
    BaseDataFetcher <|-- UserDataFetcher
    BaseDataFetcher <|-- ProductDataFetcher
    BaseDataFetcher <|-- FruitDataFetcher
```

## Adding New Entities

To add a new entity (e.g., a Fruits table), follow these steps:

1. Define the entity type
2. Create a data fetcher
3. Register the fetcher
4. Create UI components
5. Update the API endpoint
6. Add the components to the page layout

## Key Code Snippets

### Entity Type Definition

```typescript
export interface Fruit extends BaseEntity {
  name: string;
  richIn: string;
}
```

### Data Fetcher

```typescript
export class FruitDataFetcher extends BaseDataFetcher<Fruit> {
  constructor() {
    super('fruits');
  }

  protected transformData(data: unknown): Fruit[] {
    if (!data || typeof data !== 'object' || !('fruits' in data)) {
      throw new Error('Invalid data format');
    }
    return (data as { fruits: Fruit[] }).fruits;
  }
}
```

### Registry Integration

```typescript
export function initRegistry() {
  if (initialized) return;

  const registry = FetcherRegistry.getInstance();
  
  // Register all fetchers
  registry.register('users', UserDataFetcher);
  registry.register('products', ProductDataFetcher);
  registry.register('fruits', FruitDataFetcher);  // Added fruit fetcher
  
  initialized = true;
}
```

### Component Creation

```typescript
export const ServerMUIFruitTable = createServerComponent<Fruit>(ServerFruitTableComponent, 'fruits');
export const ClientMUIFruitTable = createClientComponent<Fruit>(MUIFruitTableAdapter, 'fruits');
```

## Conclusion

This architecture provides a clean, maintainable approach to data fetching in Next.js applications. The registry pattern allows for easy addition of new data sources, while the HOC pattern provides a consistent interface for components.