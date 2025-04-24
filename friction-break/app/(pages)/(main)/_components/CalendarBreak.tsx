import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import LabelWithIcon from '@/components/Label/LabelWithIcon';
import ArrowIcon from '@/assets/images/Toggle';

export default function CalendarBreak() {
  const [open, setOpen] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.toggle}>
        <LabelWithIcon text="calendar-break" />
        <TouchableOpacity onPress={() => setOpen(!open)} style={styles.button}>
          <View style={[styles.iconWrapper, open && styles.iconRotated]}>
            <ArrowIcon />
          </View>
        </TouchableOpacity>
      </View>
      {open && (
        <View style={styles.box}>
          <Text style={styles.boxText}>마찰력</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fdfdfd',
  },
  iconWrapper: {
    marginTop: 4,
    marginRight: 10,
  },
  iconRotated: {
    transform: [{ rotate: '180deg' }],
  },
  box: {
    width: '100%',
    height: 300,
    backgroundColor: '#F9E0CD',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
