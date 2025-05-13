import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  percentage: number;
};

export default function TodayMagicText({ percentage }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/panda.png')} // 이모지 대신 이미지
        style={styles.image}
      />
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
    padding: 12,
    borderRadius: 16,
    marginVertical: 10,
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#3333ff',
  },
});
