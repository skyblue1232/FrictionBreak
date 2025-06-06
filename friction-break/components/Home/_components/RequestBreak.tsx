import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LabelWithIcon from '@/components/Label/LabelWithIcon';
import { useRouter } from 'expo-router';

const requests = [
  '술과의 마찰 줄이기',
  '공부와의 마찰 줄이기',
  '아재개그와의 마찰 늘리기(루카스 제외)',
];

export default function RequestBreak() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <LabelWithIcon text="request-break"/>
        <TouchableOpacity>
          <Text style={styles.plusText} onPress={() => router.push('/request-break')}>+</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 40,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  request: {
    backgroundColor: '#343434',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    marginBottom: 2,
  },
  requestText: {
    fontSize: 18,
    color: '#fdfdfd',
  },
  underline: {
    height: 0.5,
    backgroundColor: '#9d9d9d',    
  }, 
  plusText: {
    fontSize: 28,
    color: '#07CB89',
    marginBottom: 4,
    fontWeight: 'bold',
  },
});
