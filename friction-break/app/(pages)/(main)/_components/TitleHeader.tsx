import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeartIcon from '@/assets/images/HeartImage';

export default function TitleHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>마찰을{'\n'}줄여봐요</Text>
      <View style={styles.box}>
        <HeartIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 36,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
    color: '#fdfdfd',
    fontWeight: 'bold',
    lineHeight: 40,
    flex: 1,
  },
  box: {
    width: 157,
    height: 152,
    backgroundColor: '#F9E0CD', 
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
