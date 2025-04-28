import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import dayjs from 'dayjs';
import { useCalendar } from '@/contexts/CalendarContext';
import GreenHammerIcon from '@/assets/images/GreenHamer';
import BrownHammerIcon from '@/assets/images/BrokenHamer';
import HammerIcon from '@/assets/images/TodayHamer';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 5;
const DATE_NUMBER_HEIGHT = 50; // 날짜 숫자 높이 고정

interface DateItemProps {
  date: dayjs.Dayjs;
  isSelected: boolean;
  distance: number;
  onPress: () => void;
  showIcon: boolean;
}

export default function DateItem({ date, isSelected, distance, onPress, showIcon }: DateItemProps) {
  const { today, attendance } = useCalendar();

  let numberFontSize = 24;
  let dayFontSize = 12;
  let opacity = 0.4;

  if (distance === 0) {
    numberFontSize = 40;
    dayFontSize = 24;
    opacity = 1;
  } else if (distance === 1) {
    numberFontSize = 32;
    dayFontSize = 16;
    opacity = 0.4;
  } else {
    numberFontSize = 24;
    dayFontSize = 12;
    opacity = 0.4;
  }

  const dateKey = date.format('YYYY-MM-DD');

  const renderIcon = () => {
    if (date.isSame(today, 'day')) {
      return <HammerIcon />;
    }

    const attended = attendance[dateKey];
    if (attended === true) {
      return <GreenHammerIcon />;
    } else if (attended === false) {
      return <BrownHammerIcon />;
    }

    return null;
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        
        <View style={styles.dateNumberContainer}>
          <Text style={[styles.dateText, { fontSize: numberFontSize, opacity }]}>
            {date.date()}
          </Text>
        </View>

        <Text style={[styles.dayText, { fontSize: dayFontSize, opacity }]}>
          {date.format('ddd')}
        </Text>

        {showIcon && (
          <View>
            {renderIcon()}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dateNumberContainer: {
    height: DATE_NUMBER_HEIGHT, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dateText: {
    color: '#07CB89',
    fontWeight: '600',
  },
  dayText: {
    color: '#07CB89',
    marginBottom: 16,
  },
});
