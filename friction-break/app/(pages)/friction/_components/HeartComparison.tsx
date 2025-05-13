import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeartComparison() {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>어제 💚</Text>
      <Text style={styles.vs}>VS</Text>
      <Text style={styles.box}>오늘 💜</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  box: {
    backgroundColor: '#2C2C2E',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  vs: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
