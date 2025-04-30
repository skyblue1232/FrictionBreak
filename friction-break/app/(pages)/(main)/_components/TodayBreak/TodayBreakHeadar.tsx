import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NextButton from '@/assets/images/NextButton';

export default function TodayBreakHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>today-break</Text>
      <TouchableOpacity style={styles.breakButton}>
        <Text style={styles.breakText}>break하러 가기</Text>
        <NextButton />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#9d9d9d',
    paddingBottom: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#fdfdfd',
    fontSize: 16,
    fontWeight: 'bold',
  },
  breakButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breakText: {
    color: '#fdfdfd',
    fontSize: 14,
    marginRight: 4,
  },
});