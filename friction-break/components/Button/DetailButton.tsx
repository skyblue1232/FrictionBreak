import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ViewStyle } from 'react-native';
import NextButton from '@/assets/images/NextButton';

interface DetailButtonProps {
  title: string;
  onPress: () => void;
  align?: 'left' | 'center' | 'right'; 
}

export default function DetailButton({ title, onPress, align = 'left' }: DetailButtonProps) {
    const alignmentStyle: ViewStyle = {
      justifyContent:
        align === 'left' ? 'flex-start' :
        align === 'center' ? 'center' :
        'flex-end',
    };
  
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.wrapper}>
        <View style={[styles.container, alignmentStyle]}>
          <Text style={styles.text}>{title}</Text>
          <NextButton />
        </View>
      </TouchableOpacity>
    );
}  

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%', 
  },
  text: {
    fontSize: 16,
    color: '#9D9D9D',
    fontWeight: '500',
    marginRight: 4,
  },
});
