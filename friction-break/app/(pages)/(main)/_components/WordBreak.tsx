import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LabelWithIcon from '@/components/Label/LabelWithIcon';
import LuckyImage from '../../../../assets/images/LuckyImage';
import InfoBox from '@/components/Box/InfoBox';

export default function WordBreak() {
  return (
    <View style={styles.container}>
      <LabelWithIcon text="word-break" />
      <View style={styles.boxContainer}>
        <InfoBox flex={1}>
          <LuckyImage style={styles.image} />
        </InfoBox>
        <InfoBox flex={2}>
          <Text style={styles.boxText}>4잎 클로버</Text>
        </InfoBox>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  box: {
    backgroundColor: '#343434',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
  },
  boxText: {
    fontSize: 24,
    lineHeight: 40,
    color: '#fdfdfd',
    fontWeight: '600',
  },
});
