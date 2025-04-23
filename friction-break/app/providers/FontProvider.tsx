import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useEffect, ReactNode } from 'react';
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

  useEffect(() => {
    const TextAny = Text as any;

    if (!TextAny.defaultProps) {
      TextAny.defaultProps = {};
    }

    TextAny.defaultProps.style = [
      { color: '#fdfdfd', fontFamily: 'Paperlogy-Regular' }, // ✅ 기본 색상 + 폰트 설정
      ...(Array.isArray(TextAny.defaultProps.style)
        ? TextAny.defaultProps.style
        : [TextAny.defaultProps.style]),
    ];
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fdfdfd" />;
  }

  return <>{children}</>;
}
