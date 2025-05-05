import React, { useEffect, useRef, useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import dayjs from 'dayjs';
import { useCalendar } from '@/contexts/CalendarContext';
import DateItem from './DateItem';
import CalendarHeader from './CalendarHeader';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 5;
const CENTER_INDEX = 2;
const PAST_DAYS = 36;
const FUTURE_DAYS = 2;

export default function DateSlider() {
  const { handlePress, today } = useCalendar();
  const flatListRef = useRef<FlatList>(null);
  const [selectedIndex, setSelectedIndex] = useState(PAST_DAYS); 

  const dates = useMemo(() => {
    const result = [];
    for (let i = -PAST_DAYS; i <= FUTURE_DAYS; i++) {
      result.push(today.add(i, 'day'));
    }
    return result;
  }, [today]);

  const scrollToCenter = (dateIndex: number, animated = true) => {
    const index = dateIndex + CENTER_INDEX;
    flatListRef.current?.scrollToIndex({ index, animated });
  };

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const centerFlatIndex = Math.round(offsetX / ITEM_WIDTH);
    const realIndex = centerFlatIndex - CENTER_INDEX;

    if (realIndex >= 0 && realIndex < dates.length) {
      setSelectedIndex(realIndex);
      handlePress(realIndex);
    }
  };

  useEffect(() => {
    const initialIndex = PAST_DAYS + CENTER_INDEX;
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: initialIndex, animated: false });
    }, 50);
  }, [dates]);

  return (
    <View style={styles.container}>
      <CalendarHeader />
      <FlatList
        ref={flatListRef}
        data={[null, null, ...dates, null, null]}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="center"
        initialScrollIndex={PAST_DAYS + CENTER_INDEX}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        keyExtractor={(_, idx) => idx.toString()}
        onScrollToIndexFailed={({ index }) => {
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({ index, animated: true });
          }, 100);
        }}
        onMomentumScrollEnd={handleScrollEnd}
        renderItem={({ item, index }) => {
          const realIndex = index - CENTER_INDEX;
          if (!item || realIndex < 0 || realIndex >= dates.length) {
            return <View style={{ width: ITEM_WIDTH }} />;
          }

          const isCentered = index === selectedIndex + CENTER_INDEX;
          const isFuture = item.isAfter(today);

          return (
            <DateItem
              date={item}
              isSelected={isCentered}
              distance={Math.abs(index - (selectedIndex + CENTER_INDEX))}
              onPress={() => {
                if (!isFuture) {
                  setSelectedIndex(realIndex);
                  handlePress(realIndex);
                  scrollToCenter(realIndex);
                }
              }}
              showIcon={realIndex <= PAST_DAYS}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343434',
  },
});
