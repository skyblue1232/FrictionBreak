import LabelWithIcon from '@/components/Label/LabelWithIcon';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CatchBox() {
  return (
    <View>
      <View style={styles.label}>
        <LabelWithIcon text='활력 Catch'/>
      </View>
      <View style={styles.row}>
        <Text style={styles.box}>🧲 나 </Text>
        <Text style={styles.box}>🧲 상대</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 9,
    gap: 4,
  },
  box: {
    backgroundColor: '#343434',
    fontSize: 24,
    paddingHorizontal:54,
    paddingVertical: 32,
    borderRadius: 30,
    color: '#fdfdfd',
    fontWeight: 'semibold',
    textAlign: 'center',
  },
});
