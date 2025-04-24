// components/common/LabelWithIcon.tsx
import React from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import StartIcon from '@/assets/images/Star';

interface LabelWithIconProps {
  text: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}

export default function LabelWithIcon({ text, style, containerStyle }: LabelWithIconProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <StartIcon style={styles.labelPoint} />
      <Text style={[styles.label, style]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600', 
    color: '#fdfdfd',
    lineHeight: 40,
  },
  labelPoint: {
    width: 20,
    height: 20,
    marginTop: 4,
  },
});
