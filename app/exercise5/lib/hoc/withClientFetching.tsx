// // app/exercise5/lib/hocs/withClientFetching.tsx
// 'use client';
// import { ComponentType, useState, useEffect } from 'react';
// import { BaseEntity, WithFetchingProps } from '../../types';
// import { BaseDataFetcher } from '../data-fetchers/BaseDataFetcher';

// export function withClientFetching<T extends BaseEntity>(
//   WrappedComponent: ComponentType<WithFetchingProps<T>>,
//   FetcherClass: new () => BaseDataFetcher<T>
// ) {
//   return function ClientComponent() {
//     const [state, setState] = useState<WithFetchingProps<T>>({
//       data: [],
//       loading: true,
//       error: null
//     });

//     useEffect(() => {
//       const fetcher = new FetcherClass();
      
//       const fetchData = async () => {
//         try {
//           const data = await fetcher.fetchData();
//           setState({ data, loading: false, error: null });
//         } catch (error) {
//           setState({
//             data: [],
//             loading: false,
//             error: error instanceof Error ? error : new Error('Unknown error')
//           });
//         }
//       };

//       fetchData();
//     }, []);

//     return <WrappedComponent {...state} />;
//   };
// }