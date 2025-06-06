import LabelWithIcon from '@/components/Label/LabelWithIcon';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmotionBubble() {
  return (
    <View>
      <LabelWithIcon text='감정 Bubble'/>
      <View style={styles.row}>
        <Text style={styles.box}>🌹 나</Text>
        <Text style={styles.box}>🌼 상대</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 9,
    gap: 4,
  },
  box: {
    backgroundColor: '#343434',
    fontSize: 24,
    paddingHorizontal: 54,
    paddingVertical: 32,
    borderRadius: 30,
    color: '#fdfdfd',
    fontWeight: 'semibold',
    textAlign: 'center',
  },
});
