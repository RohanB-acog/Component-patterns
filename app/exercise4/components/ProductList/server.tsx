// app/exercise4/components/ProductList/server.tsx
import { Product } from '../../types';
import { ProductDataFetcher } from '../data-fetchers/ProductDataFetcher';
import { withServerFetching } from '../../lib/hocs/withServerFetching';
import { ProductListWrapper } from './ClientWrapper';

export const ServerProductList = withServerFetching(ProductListWrapper, ProductDataFetcher);