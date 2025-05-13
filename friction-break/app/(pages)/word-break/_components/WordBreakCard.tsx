import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  content: string;
};

export default function WordBreakCard({ title, content }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider} />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D9EAFE',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#000',
  },
});
