import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LabelWithIcon from '@/components/Label/LabelWithIcon';
import LuckyImage from '../../../assets/images/LuckyImage';
import Card from '@/components/Common/Card';
import { useRouter } from 'expo-router';

export default function WordBreak() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <LabelWithIcon text="word-break" />
        <TouchableOpacity>
          <Text style={styles.plusText} onPress={() => router.push('/word-break')}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxContainer}>
        <Card
          flex={1}
          color={'gray'}
          height={132}
          contentStyle={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <LuckyImage style={styles.image} />
        </Card>
        <Card
          flex={2}
          color={'gray'}
          height={132}
          contentStyle={{ alignItems: 'center', justifyContent: 'center' }}
        >
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  plusText: {
    fontSize: 28,
    color: '#07CB89',
    fontWeight: 'bold',
    marginBottom: 4,
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
