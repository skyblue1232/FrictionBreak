import { View, Text, StyleSheet } from 'react-native';

export default function WordBreakPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Word Break Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fdfdfd',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
