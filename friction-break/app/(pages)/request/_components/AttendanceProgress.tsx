import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { progressData } from '@/data/progressData'; 

export default function AttendanceProgress() {
  return (
    <View style={styles.container}>
      {progressData.map((item, index) => (
        <View key={index}>
          <Text style={styles.dayLabel}>{item.dayLabel}</Text>
          <View style={styles.barContainer}>
            <View
              style={[
                styles.progressBar,
                item.status === 'resolved' && { backgroundColor: '#07CB89' },
                item.status === 'unresolved' && { backgroundColor: '#CB5B5F' },
                { width: `${item.progress * 100}%` },
              ]}
            />
            <View style={styles.remainingBar} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: '#333333',
    borderRadius: 30,
    padding: 20,
  },
  dayLabel: {
    color: '#fdfdfd',
    fontSize: 14,
    width: 50,
    paddingBottom: 6,
  },
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 4,
    backgroundColor: '#9D9D9D',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
    width: '100%'
  },
  progressBar: {
    height: 4,
    borderRadius: 10,
  },
  remainingBar: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

