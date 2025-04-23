import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import FontProvider from './FontProvider';

const queryClient = new QueryClient();

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FontProvider>
        {children}
      </FontProvider>
    </QueryClientProvider>
  );
}
