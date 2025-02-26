// app/exercise4/components/ProductList/client.tsx
'use client';
import { Product } from '../../types';
import { ProductDataFetcher } from '../data-fetchers/ProductDataFetcher';
import { withClientFetching } from '../../lib/hocs/withClientFetching';
import { ProductListWrapper } from './ClientWrapper';

export const ClientProductList = withClientFetching(ProductListWrapper, ProductDataFetcher);