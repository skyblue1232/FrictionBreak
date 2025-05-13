import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmotionBubble() {
  return (
    <View>
      <Text style={styles.label}>감정 Bubble</Text>
      <View style={styles.row}>
        <Text style={[styles.box, { backgroundColor: '#1E90FF' }]}>나 🌹</Text>
        <Text style={[styles.box, { backgroundColor: '#FFD700' }]}>상대 🌼</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#fff',
    marginBottom: 6,
    marginLeft: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    padding: 16,
    borderRadius: 12,
    color: '#000',
    fontWeight: 'bold',
    minWidth: 100,
    textAlign: 'center',
  },
});
