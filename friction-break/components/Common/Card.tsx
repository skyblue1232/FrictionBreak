import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  height: number;
  color: 'gray' | 'green' | 'blue';
}

const COLOR_MAP: Record<CardProps['color'], string> = {
  gray: '#343434',
  green: '#07CB89',
  blue: '#D6E6FE',
};

export default function Card({ children, height, color }: CardProps) {
  const cardStyle: ViewStyle = {
    backgroundColor: COLOR_MAP[color],
    height,
  };

  return (
    <View style={[styles.card, cardStyle]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 30,
    padding: 20,
  },
});
