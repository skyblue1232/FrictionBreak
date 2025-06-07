import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const DownArrowIcon: React.FC<Props> = ({
  width = 14,
  height = 7,
  color = '#FDFDFD',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 7"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2222 0.270268L6.97667 4.93032L1.77688 0.309937C1.38954 -0.034647 0.738982 -0.0525375 0.325501 0.269489C-0.0889139 0.591516 -0.110381 1.13289 0.276966 1.4767L6.19824 6.73803C6.51465 7.01883 7 7.07017 7.39481 6.90993C7.54415 6.8656 7.68602 6.80103 7.80176 6.69914L13.723 1.43781C14.1104 1.09322 14.0889 0.552624 13.6745 0.230598C13.2601 -0.0914294 12.6095 -0.0743167 12.2222 0.270268Z"
        fill={color}
      />
    </Svg>
  );
};

export default DownArrowIcon;
