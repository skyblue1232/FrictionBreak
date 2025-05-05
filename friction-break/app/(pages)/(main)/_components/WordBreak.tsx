import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LabelWithIcon from '@/components/Label/LabelWithIcon';
import LuckyImage from '../../../../assets/images/LuckyImage';
import Card from '@/components/Common/Card';

export default function WordBreak() {
  return (
    <View style={styles.container}>
      <LabelWithIcon text="word-break" />
      <View style={styles.boxContainer}>
        <Card flex={1} color={'gray'} height={132} contentStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          <LuckyImage style={styles.image} />
        </Card>
        <Card flex={2} color={'gray'} height={132} contentStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.boxText}>4잎 클로버</Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 40,
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 8,
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
    width: 88,
    height: 88,
  },
  boxText: {
    fontSize: 24,
    lineHeight: 40,
    color: '#fdfdfd',
    fontWeight: '600',
  },
});
