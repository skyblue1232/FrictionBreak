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
    marginVertical: 20,
    backgroundColor: '#343434',
    borderRadius: 30,
    paddingVertical: 30,
  },
  box: {
    backgroundColor: '#fdfdfd',
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 28,
    paddingVertical: 8,
    marginHorizontal: 28,
    borderRadius: 30,
  },
  vs: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
