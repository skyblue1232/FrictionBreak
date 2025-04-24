import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function HeartIcon(props: SvgProps) {
  return (
    <Svg
      width={100}
      height={90}
      viewBox="0 0 80 70"
      fill="none"
      {...props}
    >
      <Path
        d="M40 73L34.2 67.7488C13.6 49.1706 0 36.9177 0 21.8801C0 9.62725 9.68 0 22 0C28.96 0 35.64 3.22234 40 8.31444C44.36 3.22234 51.04 0 58 0C70.32 0 80 9.62725 80 21.8801C80 36.9177 66.4 49.1706 45.8 67.7886L40 73Z"
        fill="#D6E6FE"
      />
    </Svg>
  );
}
