import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import FontProvider from '../providers/FontProvider';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

const queryClient = new QueryClient();

NavigationBar.setBackgroundColorAsync('#222222');

export default function Mainlayout() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FontProvider>
          <StatusBar style="light" backgroundColor="#222222" />
          <Stack
            screenOptions={{
              headerShown: false,
              presentation: 'modal',
              contentStyle: { backgroundColor: '#222222', padding: 16 },
            }}
          >
            <Stack.Screen name="(main)/index" />
            <Stack.Screen name="(daily)/index" />
          </Stack>
        </FontProvider>
      </QueryClientProvider>
    </>
  );
}
