import { View, Text, StyleSheet } from 'react-native';
import LabelWithIcon from '@/components/Label/LabelWithIcon';

const requests = [
  '술과의 마찰 줄이기',
  '공부와의 마찰 줄이기',
  '아재개그와의 마찰 늘리기(루카스 제외)',
];

export default function RequestBreak() {
  return (
    <View style={styles.container}>
      <LabelWithIcon text="request-break"/>
      {requests.map((item, idx) => (
        <View key={idx} style={styles.request}>
          <Text style={styles.requestText}>{item}</Text>
          <View style={styles.underline} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  request: {
    backgroundColor: '#FCE1CC',
    borderRadius: 16,
    padding: 12,
    marginBottom: 6,
  },
  requestText: {
    fontSize: 16,
  },
  underline: {
    height: 1,
    backgroundColor: '#9d9d9d',    
  },  
});
