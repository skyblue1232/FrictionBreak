import BackButton from '@/assets/images/BackButton';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderBarProps {
  title: string;
  onBackPress: () => void;
}

export default function HeaderBar ({ title, onBackPress }: HeaderBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <BackButton />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%',
    backgroundColor: '#222',
    marginTop: 24, 
    marginBottom: 60,
  },
  backButton: {
    position: 'absolute',
    left: 12, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});