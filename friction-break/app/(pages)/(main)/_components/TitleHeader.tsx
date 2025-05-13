import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TitleHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Friction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    color: '#fdfdfd',
    fontWeight: '600',
    lineHeight: 40,
    flex: 1,
  },
});
