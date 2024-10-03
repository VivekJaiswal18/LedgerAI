

'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DataDisplay from '../components/DataDisplay';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Crypto Data Analyzer</h1>
        <DataDisplay />
      </div>
    </QueryClientProvider>
  );
}


