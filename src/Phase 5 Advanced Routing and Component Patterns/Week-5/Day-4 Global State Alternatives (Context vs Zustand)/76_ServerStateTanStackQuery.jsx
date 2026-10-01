import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

const NetworkDataLoader = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['systemLogs'],
    queryFn: () => fetch('https://typicode.com').then(res => res.json())
  });

  if (isPending) return <p>Syncing cached structures...</p>;
  if (error) return <p>Network cache execution fault.</p>;

  return <p>Fetched Cache Objective: <strong>{data.title}</strong></p>;
};

const ServerStateTanStackQuery = () => (
  <QueryClientProvider client={queryClient}>
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Async Telemetry Synchronization</h2>
      <NetworkDataLoader />
    </div>
  </QueryClientProvider>
);

export default ServerStateTanStackQuery;