import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import AppProviders from '../providers/AppProviders';
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  NavigationBar.setBackgroundColorAsync('#222222');
  NavigationBar.setButtonStyleAsync('light');
}

export default function Mainlayout() {
  const backgroundColor = '#222222';

  return (
    <AppProviders>
      <StatusBar style="light" backgroundColor={backgroundColor} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor },
        }}
      >
        <Stack.Screen name="(main)/index" />
        <Stack.Screen name="word-break/index" />
      </Stack>
    </AppProviders>
  );
}
