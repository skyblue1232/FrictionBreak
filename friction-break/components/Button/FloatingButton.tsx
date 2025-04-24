import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StarLarge from '@/assets/images/StarLarge';

interface Props {
  onPress?: () => void;
}

export default function FloatingHelp({ onPress }: Props) {
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 50000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showBubble && (
        <View style={styles.bubble}>
          <Text style={styles.text}>메뉴얼은 여기!</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <StarLarge />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    bottom: 64,
    right: 48,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 8,
    maxWidth: 250,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,

  },
});
