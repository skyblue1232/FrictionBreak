import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CalendarIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function CalendarIcon({
  width = 20,
  height = 24,
  color = '#07CB89',
}: CalendarIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 24" fill="none">
      <Path
        d="M4.7002 1V2.91891M14.9002 1V2.91891"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M10.7998 18.1572H14.7998"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M16.7 3.14453H2.8C1.8 3.14453 1 4.04755 1 5.17632V20.8662C1 21.995 1.8 22.898 2.8 22.898H16.7C17.7 22.898 18.5 21.995 18.5 20.8662V5.28919C18.5 4.16042 17.7 3.14453 16.7 3.14453Z"
        stroke={color}
        strokeWidth={1.8}
      />
    </Svg>
  );
}
