import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function ArrowIcon(props: SvgProps) {
  return (
    <Svg
      width={15}
      height={9}
      viewBox="0 0 15 9"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0947 8.65179L7.47474 2.66079L1.90374 8.60079C1.48874 9.04379 0.791739 9.06679 0.348738 8.65279C-0.0952615 8.23879 -0.118261 7.54279 0.296739 7.10079L6.64074 0.336791C6.97974 -0.0242087 7.49974 -0.0902089 7.92274 0.115791C8.08274 0.172791 8.23474 0.255791 8.35874 0.386791L14.7027 7.15079C15.1177 7.59379 15.0947 8.28879 14.6507 8.70279C14.2067 9.11679 13.5097 9.09479 13.0947 8.65179Z"
        fill="#FDFDFD"
      />
    </Svg>
  );
}
