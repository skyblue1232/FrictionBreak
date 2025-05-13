import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface NextButtonProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function NextButton({
  width = 9,
  height = 18,
  color = '#9D9D9D',
}: NextButtonProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 6 9" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.231658 7.85712L4.22599 4.485L0.265661 1.14228C-0.0296974 0.893274 -0.045032 0.47506 0.230991 0.20925C0.507014 -0.0571589 0.971052 -0.0709591 1.26574 0.17805L5.77545 3.98458C6.01614 4.18799 6.06014 4.5 5.9228 4.75381C5.8848 4.84981 5.82946 4.94102 5.74212 5.01542L1.23241 8.82195C0.937049 9.07096 0.473678 9.05716 0.197655 8.79075C-0.0783682 8.52434 -0.0636997 8.10612 0.231658 7.85712Z"
        fill={color}
      />
    </Svg>
  );
}
