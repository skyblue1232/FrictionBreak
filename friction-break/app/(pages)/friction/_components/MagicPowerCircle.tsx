import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type Props = {
  percentage: number;
};

const RADIUS = 70;
const STROKE_WIDTH = 10;
const CIRCLE_LENGTH = 2 * Math.PI * RADIUS;

export default function MagicPowerCircle({ percentage }: Props) {
  const strokeDashoffset = CIRCLE_LENGTH - (CIRCLE_LENGTH * percentage) / 100;

  return (
    <View style={styles.container}>
      <Svg width={160} height={160}>
        <Circle
          stroke="#2C2C2E"
          cx={80}
          cy={80}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
        />
        <Circle
          stroke="#00DA7C"
          cx={80}
          cy={80}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCLE_LENGTH}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin="80, 80"
        />
      </Svg>
      <Text style={styles.text}>{percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
