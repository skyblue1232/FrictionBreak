import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import dayjs from 'dayjs';
import mockAttendance from '@/mocks/attendance';
import { generateInitialDates, loadMorePastDates } from '@/utils/dataUtils';

interface CalendarContextType {
  today: dayjs.Dayjs;
  dates: dayjs.Dayjs[];
  selectedIndex: number;
  handlePress: (index: number) => void;
  handleLoadMorePastDates: () => void;
  attendance: Record<string, boolean>;
}

const CalendarContext = createContext<CalendarContextType | null>(null);

export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
}

interface CalendarProviderProps {
  children: ReactNode;
}

export function CalendarProvider({ children }: CalendarProviderProps) {
  const [today] = useState(() => dayjs().tz('Asia/Seoul'));
  const [dates, setDates] = useState<dayjs.Dayjs[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [attendance] = useState(mockAttendance);

  useEffect(() => {
    setDates(generateInitialDates());
  }, []);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

  const handleLoadMorePastDates = () => {
    const moreDates = loadMorePastDates(dates);
    setDates(moreDates);
    setSelectedIndex(prev => prev + 3);
  };

  return (
    <CalendarContext.Provider
      value={{
        today,
        dates,
        selectedIndex,
        handlePress,
        handleLoadMorePastDates,
        attendance,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
