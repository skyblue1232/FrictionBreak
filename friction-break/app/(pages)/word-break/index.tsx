import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import WordBreakCard from './_components/WordBreakCard';
import StarLarge from '@/assets/images/StarLarge';
import { wordBreaks } from './data/wordBreak';

export default function WordBreakPage() {
  const filtered = wordBreaks.filter(item => item.content.trim() !== '');

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <StarLarge width={40} height={40} color="#07CB89" />
        <Text style={styles.headerText}>word-break</Text>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <WordBreakCard title={item.title} content={item.content} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // RN 0.71 이상. 그 이하일 경우 marginRight 추가
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
});
