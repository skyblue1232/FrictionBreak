import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {
  percent?: number;
}

export default function TodayBreakDescription({ percent = 75 }: Props) {
  return (
    <View>
      <Text style={styles.descriptionText}>
        총 마찰력은 <Text style={styles.highlight}>{percent}%</Text>네요.{"\n"}
        오늘도 열심히 줄여봐요!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    color: '#fdfdfd',
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  highlight: {
    fontWeight: '700',
    color: '#4267F4',
  },
});
