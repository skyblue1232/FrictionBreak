import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import MagicPowerCircle from './_components/MagicPowerCircle';
import TodayMagicText from './_components/TodayMagicText';
import HeartComparison from './_components/HeartComparison';
import EmotionBubble from './_components/EmotionBubble';
import CatchBox from './_components/CatchBox';
import HeaderBar from '@/components/Header/MainHearder';
import { useRouter } from 'expo-router';

export default function FrictionPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <HeaderBar
        title="오늘의 마찰력"
        onBackPress={() => router.push("/")}
      />

      <ScrollView
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.contentContainer}
      >
        <MagicPowerCircle />
        <View style={styles.divider} />
        <TodayMagicText percentage={75} />
        <HeartComparison />
        <EmotionBubble />
        <CatchBox />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 20, 
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#343434',
    marginVertical: 20,
  },
});
