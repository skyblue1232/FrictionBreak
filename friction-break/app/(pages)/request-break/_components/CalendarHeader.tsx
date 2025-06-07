import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  year: number;
  month: number;
  onMonthChange: (newYear: number, newMonth: number) => void;
}

const CalendarHeader: React.FC<Props> = ({ year, month, onMonthChange }) => {
  const handlePrevMonth = () => {
    const newMonth = month - 1;
    if (newMonth < 1 && year > 2024) {
      onMonthChange(year - 1, 12);
    } else if (newMonth >= 1) {
      onMonthChange(year, newMonth);
    }
  };

  const handleNextMonth = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const selectedDate = new Date(year, month - 1, 1);
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    if (
      selectedDate < new Date(currentYear, currentMonth - 1, 1) &&
      selectedDate >= sixMonthsAgo
    ) {
      const newMonth = month + 1;
      if (newMonth > 12) {
        onMonthChange(year + 1, 1);
      } else {
        onMonthChange(year, newMonth);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrevMonth}>
        <Text style={styles.arrow}>◀️</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>{`${year}년 ${month}월`}</Text>
      <TouchableOpacity onPress={handleNextMonth}>
        <Text style={styles.arrow}>▶️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  arrow: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default CalendarHeader;
