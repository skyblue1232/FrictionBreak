import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import WordBreakCard from './_components/WordBreakCard';
import StarLarge from '@/assets/images/StarLarge';
import { wordBreaks } from '../../../data/wordBreak';
import HeaderBar from '@/components/Header/MainHearder';
import { useRouter } from 'expo-router';

export default function WordBreakPage() {
  const filtered = wordBreaks.filter(item => item.content.trim() !== '');
  const router = useRouter();

  const renderHeader = () => (
    <View style={styles.headerRow}>
      <StarLarge width={36} height={36} color="#07CB89" />
      <Text style={styles.headerText}>word-break</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderBar title="단어 부수기" onBackPress={() => router.back()} />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <WordBreakCard title={item.title} content={item.content} />
        )}
        ListHeaderComponent={renderHeader} 
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  list: {
    gap: 12,
    paddingBottom: 24,
  },
});
