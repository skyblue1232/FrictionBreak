import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AttendanceInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.statusRow}>
          <View style={[styles.circle, { backgroundColor: '#07CB89' }]} />
          <Text style={styles.statusText}>마찰 해결</Text>
        </View>
        <View style={styles.statusRow}>
          <View style={[styles.circle, { backgroundColor: '#CB5B5F' }]} />
          <Text style={styles.statusText}>마찰 미해결</Text>
        </View>
        <View style={styles.statusRow}>
          <View style={[styles.circle, { backgroundColor: '#000000' }]} />
          <Text style={styles.statusText}>미출석</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.rightSection}>
        <Text style={styles.infoText}>
          지금까지 9일 출석하셨네요. {'\n'}
          앞으로도 열심히 마찰을 줄여봐요!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginRight: 8,
  },
  statusText: {
    color: '#fdfdfd',
    fontSize: 14,
  },
  divider: {
    width: 2,
    height: '100%',
    backgroundColor: '#6d6d6d',
    marginHorizontal: 14,
  },
  rightSection: {
    flex: 1,
    paddingRight: 8,
  },
  infoText: {
    color: '#fdfdfd',
    fontSize: 14,
  },
});
