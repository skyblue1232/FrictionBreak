import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

export default function MagicPowerCircle({ percent = 75 }) {
  const RADIUS = 80;
  const STROKE_WIDTH = 16;
  const CIRCLE_LENGTH = 2 * Math.PI * RADIUS;

  const strokeDashoffset = useMemo(() => 
      CIRCLE_LENGTH * (1 - percent / 100), 
    [percent]);

  return (
    <View style={styles.container}>
      <Svg width={176} height={176}>
        <G rotation="-90" origin="88,88">
          <Circle
            stroke="#07CB89"
            strokeOpacity={0.2}
            cx={88}
            cy={88}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
            fill="#222222"
          />
          <Circle
            stroke="#07CB89"
            cx={88}
            cy={88}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={`${CIRCLE_LENGTH} ${CIRCLE_LENGTH}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </G>
      </Svg>
      <Text style={styles.text}>{percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  text: {
    position: 'absolute',
    fontSize: 32,
    lineHeight: 32,
    color: '#fdfdfd',
    fontWeight: '600',
  },
});
