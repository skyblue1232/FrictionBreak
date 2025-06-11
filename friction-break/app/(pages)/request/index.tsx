import HeaderBar from '@/components/Header/MainHearder';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CalendarHeader from './_components/CalendarHeader';
import AttendanceCalendar from './_components/AttendanceCalendar';
import AttendanceInfo from './_components/AttendanceInfo';
import AttendanceProgress from './_components/AttendanceProgress';

export default function RequestPage() {
  const router = useRouter();
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);

  const handleMonthChange = (newYear: number, newMonth: number) => {
    setYear(newYear);
    setMonth(newMonth);
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="마찰 리퀘스트" onBackPress={() => router.back()} />
      <ScrollView
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <CalendarHeader
          year={year}
          month={month}
          onMonthChange={handleMonthChange}
        />
        <AttendanceCalendar year={year} month={month} />
        <View style={styles.divider} />
        <AttendanceInfo />
        <AttendanceProgress />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    paddingBottom: 20, 
  },
  divider: {
    width: '100%',
    height: 2,
    marginVertical: 28,
    backgroundColor: '#6d6d6d',
  },
});
