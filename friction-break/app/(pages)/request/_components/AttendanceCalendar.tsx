import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { attendanceData } from '@/data/attendanceData';

interface Props {
  year: number;
  month: number;
}

export default function AttendanceCalendar({ year, month }: Props) {
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  const daysInMonth = new Date(year, month, 0).getDate();

  const renderDay = (day: number) => {
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const status = attendanceData.find((item) => item.date === dateStr)?.status;

    let backgroundColor = 'transparent';

    if (dateStr === todayString) {
      backgroundColor = '#3C98CC';
    } else if (status === '출석') {
      backgroundColor = '#07CB89';
    } else if (status === '결석') {
      backgroundColor = '#CB5B5F';
    }

    return (
      <View key={day} style={styles.dayContainer}>
        <View style={[styles.circle, { backgroundColor }]}>
          <Text style={styles.dayText}>{day}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.grid}>
      {Array.from({ length: daysInMonth }, (_, i) => renderDay(i + 1))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dayContainer: {
    width: '14.28%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

