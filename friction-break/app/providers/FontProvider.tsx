import { useFonts } from 'expo-font';
import React, { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';

interface Props {
  children: ReactNode;
}

export default function FontProvider({ children }: Props) {
  const [fontsLoaded] = useFonts({
    'Paperlogy-Regular': require('../../assets/fonts/Paperlogy-4Regular.ttf'),
    'Paperlogy-Medium': require('../../assets/fonts/Paperlogy-5Medium.ttf'),
    'Paperlogy-Bold': require('../../assets/fonts/Paperlogy-6SemiBold.ttf'),
    'Paperlogy-Black': require('../../assets/fonts/Paperlogy-7Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size="large" color="#888" />
    );
  }

  return <>{children}</>;
}
