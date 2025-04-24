import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface InfoBoxProps {
  children: React.ReactNode;
  flex?: number;
  style?: ViewStyle;
}

export default function InfoBox({ children, flex = 1, style }: InfoBoxProps) {
  return (
    <View style={[styles.box, { flex }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F9E0CD',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
