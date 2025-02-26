// app/exercise4/lib/hocs/withFetching.tsx
import { ComponentType } from 'react';
import { BaseDataFetcher } from '../../components/data-fetchers/BaseDataFetcher';
import { WithFetchingProps } from '../../types';

// Base HOC factory that both server and client HOCs will use
function createFetchingHOC<T>(
  fetchingFn: (fetcher: BaseDataFetcher<T>) => Promise<WithFetchingProps<T>>
) {
  return (
    WrappedComponent: ComponentType<WithFetchingProps<T>>,
    DataFetcher: new () => BaseDataFetcher<T>
  ) => {
    return fetchingFn(new DataFetcher())
      .then(props => <WrappedComponent {...props} />);
  };
}