import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const DashboardPage = lazyLoad(
  () => import('./index'),
  module => module.DashboardPage,
  {
    fallback: <LoadingIndicator/>,
  },
);
