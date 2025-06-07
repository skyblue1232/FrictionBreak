import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  year: number;
  month: number;
  onSelect: (newYear: number, newMonth: number) => void;
  onClose: () => void;
}

const CalendarDropdown: React.FC<Props> = ({
  year,
  month,
  onSelect,
  onClose,
}) => {
  const now = new Date();
  const months = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    return { year: date.getFullYear(), month: date.getMonth() + 1 };
  });

  return (
    <View style={styles.dropdown}>
      {months.map((item) => (
        <TouchableOpacity
          key={`${item.year}-${item.month}`}
          onPress={() => {
            onSelect(item.year, item.month);
            onClose();
          }}
          style={[
            styles.item,
            item.year === year && item.month === month && styles.selectedItem,
          ]}
        >
          <Text style={styles.itemText}>{`${item.year}년 ${item.month}월`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    top: 50, 
    right: 0,
    backgroundColor: '#2f2f2f',
    borderRadius: 8,
    padding: 8,
    zIndex: 200,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  itemText: {
    color: '#fdfdfd',
    fontSize: 16,
  },
  selectedItem: {
    backgroundColor: '#444',
    borderRadius: 4,
  },
});

export default CalendarDropdown;
