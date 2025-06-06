import Kitten from '@/assets/images/Kitten';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  percentage: number;
};

export default function TodayMagicText({ percentage }: Props) {
  return (
    <View style={styles.container}>
      <Kitten width={80} height={80} />
      <Text style={styles.text}>
        오늘의 마찰력은 <Text style={styles.highlight}>{percentage}%</Text>입니다.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00DA7C',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 30,
    marginVertical: 12,
    zIndex: 100,
  },
  image: {
    marginTop: 4,
    marginRight: 8,
  },
  text: {
    color: '#000',
    fontSize: 20,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#3333ff',
    fontSize: 24,
  },
});
