import React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend
} from 'react-native-svg';

const CustomIcon = ({ fill = '#222222' }) => (
  <Svg width={56} height={54} viewBox="0 0 52 50" fill="none">
    {[...Array(8)].map((_, i) => (
      <G
        key={i}
        rotation={i * 45}
        originX={26}
        originY={27}
      >
        <Path 
          d='M26.0469 9.49414C23.6976 9.49306 21.4007 10.1413 19.4468 11.3569C17.4929 12.5725 15.9698 14.3007 15.0702 16.3231C14.1706 18.3454 13.9349 20.571 14.393 22.7182C14.851 24.8653 15.9822 26.8377 17.6434 28.3857C19.3047 29.9337 21.4213 30.9878 23.7256 31.4146C26.0299 31.8414 28.4182 31.6218 30.5885 30.7835C32.7588 29.9453 34.6135 28.526 35.918 26.7053C37.2225 24.8846 37.9182 22.7443 37.917 20.5551C37.9124 17.6229 36.6603 14.812 34.4352 12.7386C32.2101 10.6652 29.1936 9.49849 26.0469 9.49414ZM26.0469 28.4604C24.3688 28.4615 22.7279 27.9988 21.332 27.1308C19.9361 26.2628 18.8478 25.0285 18.2048 23.5841C17.5618 22.1397 17.393 20.55 17.7196 19.0162C18.0463 17.4823 18.8539 16.0732 20.0401 14.9671C21.2263 13.8609 22.738 13.1075 24.3838 12.802C26.0296 12.4965 27.7357 12.6528 29.2863 13.2509C30.8368 13.8491 32.1621 14.8624 33.0946 16.1625C34.027 17.4627 34.5247 18.9913 34.5247 20.5551C34.5286 21.5951 34.3122 22.6255 33.888 23.5875C33.4637 24.5494 32.84 25.4239 32.0524 26.1608C31.2649 26.8977 30.329 27.4826 29.2985 27.8819C28.268 28.2812 27.163 28.4871 26.0469 28.4878V28.4604Z'
          fill={fill}
          fillOpacity={0.8}
        />

      </G>
    ))}
    <Defs>
      <Filter
        id="filter0_d_201_1270"
        x={0}
        y={0}
        width={52}
        height={49.0112}
        filterUnits="userSpaceOnUse"
      >
        <FeFlood floodOpacity={0} result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dy={4} />
        <FeGaussianBlur stdDeviation={2} />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <FeBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_201_1270"
        />
        <FeBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_201_1270"
          result="shape"
        />
      </Filter>
    </Defs>
  </Svg>
);

export default CustomIcon;
