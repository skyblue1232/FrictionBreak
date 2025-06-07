import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AttendanceInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        지금까지 9일 출석하셨습니다. 앞으로도 열심히 마찰을 참여해요!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#333333',
    borderRadius: 8,
  },
  infoText: {
    color: '#FFFFFF',
  },
});

export default AttendanceInfo;
