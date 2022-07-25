import React, { ReactNode, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const withSuspense = (children: ReactNode) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);

export default withSuspense;
