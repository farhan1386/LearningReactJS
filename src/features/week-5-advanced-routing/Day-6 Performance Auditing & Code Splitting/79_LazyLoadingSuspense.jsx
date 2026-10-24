import React, { lazy, Suspense, useState } from 'react';

const AsyncHeavyViewport = lazy(() => import('./63_LifecycleDiagnostics'));

const LazyLoadingSuspense = () => {
  const [loadTriggered, setLoadTriggered] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Code-Splitting Component Target Chunking</h2>
      <button onClick={() => setLoadTriggered(true)}>Request Isolated Chunk</button>
      <div style={{ marginTop: '20px' }}>
        {loadTriggered && (
          <Suspense fallback={<p>Streaming network chunks...</p>}>
            <AsyncHeavyViewport />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default LazyLoadingSuspense;