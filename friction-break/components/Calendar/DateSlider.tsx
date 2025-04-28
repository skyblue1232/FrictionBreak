import React, { useRef } from 'react';
import { FlatList, StyleSheet, Dimensions, View } from 'react-native';
import { useCalendar } from '@/contexts/CalendarContext';
import DateItem from './DateItem';
import CalendarHeader from './CalendarHeader';
import DetailButton from '../Button/DetailButton';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 5;

export default function DateSlider() {
  const { dates, selectedIndex, handlePress, handleLoadMorePastDates } = useCalendar();
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CalendarHeader />
      <FlatList
        ref={flatListRef}
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        keyExtractor={(_, idx) => idx.toString()}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        onMomentumScrollBegin={({ nativeEvent }) => {
          if (nativeEvent.contentOffset.x < ITEM_WIDTH) {
            handleLoadMorePastDates();
          }
        }}
        onScrollBeginDrag={({ nativeEvent }) => {
          const { contentOffset } = nativeEvent;
          const rightmostOffset = (selectedIndex + 2) * ITEM_WIDTH;
          if (contentOffset.x > rightmostOffset) {
            flatListRef.current?.scrollToOffset({ offset: rightmostOffset, animated: true });
          }
        }}
        renderItem={({ item, index }) => (
          <DateItem
            date={item}
            isSelected={index === selectedIndex}
            distance={Math.abs(index - selectedIndex)}
            onPress={() => {
              handlePress(index);
              flatListRef.current?.scrollToIndex({ index, animated: true });
            }}
            showIcon={index <= selectedIndex}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <DetailButton 
          title='펼쳐보기' 
          align='right'
          onPress={() => router.push("/word-break")}  />
      </View>
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
    buttonContainer: {
        marginBottom: 16,
    },
});
