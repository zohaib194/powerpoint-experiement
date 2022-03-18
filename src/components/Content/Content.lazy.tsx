import React, { lazy, Suspense } from 'react';

const LazyContent = lazy(() => import('./Content'));

const Content = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContent {...props} />
  </Suspense>
);

export default Content;
