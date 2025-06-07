import DownArrowIcon from '@/assets/images/ToggleIcon';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CalendarDropdown from './CalendarDropdown'; 

interface Props {
  year: number;
  month: number;
  onMonthChange: (newYear: number, newMonth: number) => void;
}

const CalendarHeader: React.FC<Props> = ({ year, month, onMonthChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMonthSelect = (newYear: number, newMonth: number) => {
    onMonthChange(newYear, newMonth);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.yearContainer}>
        <Text style={styles.yearText}>{year}</Text>
      </View>

      <TouchableOpacity
        style={styles.monthContainer}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text style={styles.monthText}>{`${month}월`}</Text>
        <DownArrowIcon />
      </TouchableOpacity>

      {isDropdownOpen && (
        <CalendarDropdown
          year={year}
          month={month}
          onSelect={handleMonthSelect}
          onClose={() => setIsDropdownOpen(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 16,
    position: 'relative',
    zIndex: 1, 
  },
  yearContainer: {
    flex: 1,
    alignItems: 'center',
  },
  yearText: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    color: '#FFFFFF',
  },
  monthContainer: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 4,
  },
});

export default CalendarHeader;
