import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const CheckoutPage = lazyLoad(
  () => import('./index'),
  module => module.CheckoutPage,
  {
    fallback: <LoadingIndicator/>,
  },
);
