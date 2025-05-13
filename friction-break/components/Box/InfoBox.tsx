import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface InfoBoxProps {
  children: React.ReactNode;
  flex?: number;
  height?: number;
  style?: ViewStyle;
}

export default function InfoBox({ children, flex = 1, height, style }: InfoBoxProps) {
  return (
    <View style={[styles.box, { flex, height }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#343434',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
