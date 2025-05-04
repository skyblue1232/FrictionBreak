import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCalendar } from '@/contexts/CalendarContext';
import CalendarIcon from '@/assets/images/MonthIcon';

export default function CalendarHeader() {
  const { today } = useCalendar();

  return (
    <View style={styles.container}>
      <CalendarIcon color="#07CB89" />
      <Text style={styles.text}>
        {today.format('MMMM, YYYY')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    marginBottom: 28,
    gap: 4,
  },
  text: {
    fontSize: 20,
    color: '#07CB89',
    fontWeight: '600',
  },
});
