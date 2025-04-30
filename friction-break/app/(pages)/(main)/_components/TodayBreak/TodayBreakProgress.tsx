import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle, G } from 'react-native-svg';
import { useMemo } from 'react';

export default function TodayBreakProgress({ percent = 75 }) {
  const radius = 80;
  const strokeWidth = 16;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = useMemo(() => 
    circumference * (1 - percent / 100), 
  [percent]);

  return (
    <View style={styles.progressContainer}>
      <Svg width={176} height={176}>
        <G rotation="-90" origin="88,88">
          <Circle
            stroke="#07CB89"
            strokeOpacity={0.2}
            cx={88}
            cy={88}
            r={radius}
            strokeWidth={strokeWidth}
            fill="#393939"
          />
          <Circle
            stroke="#07CB89"
            cx={88}
            cy={88}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </G>
      </Svg>
      <Text style={styles.progressText}>{percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  progressText: {
    position: 'absolute',
    fontSize: 24,
    color: '#fdfdfd',
    fontWeight: 'bold',
  },
});
