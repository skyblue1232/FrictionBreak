import React from 'react';
import { View, StyleSheet } from 'react-native';
import MagicPowerCircle from './_components/MagicPowerCircle';
import TodayMagicText from './_components/TodayMagicText';
import HeartComparison from './_components/HeartComparison';
import EmotionBubble from './_components/EmotionBubble';
import CatchBox from './_components/CatchBox';

export default function FrictionPage() {
  return (
    <View style={styles.container}>
      <MagicPowerCircle percentage={75} />
      <TodayMagicText percentage={75} />
      <HeartComparison />
      <EmotionBubble />
      <CatchBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
