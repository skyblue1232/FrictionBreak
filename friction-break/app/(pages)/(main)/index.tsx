import RequestBreak from "@/app/(pages)/(main)/_components/RequestBreak";
import TitleHeader from "@/app/(pages)/(main)/_components/TitleHeader";
import WordBreak from "@/app/(pages)/(main)/_components/WordBreak";
import DateSlider from "@/components/Calendar/DateSlider";
import { CalendarProvider } from "@/contexts/CalendarContext";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { useState } from "react";
import TodayBreak from "./_components/TodayBreak/TodayBreak";

export default function MainPage() {
  const [isDateSliderVisible, setIsDateSliderVisible] = useState(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;

    if (yOffset < 300) { 
      if (!isDateSliderVisible) {
        setIsDateSliderVisible(true);
      }
    } else {
      if (isDateSliderVisible) {
        setIsDateSliderVisible(false);
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar 
        style="light" 
        backgroundColor={isDateSliderVisible ? '#343434' : '#222222'} 
      />

      <CalendarProvider>
        <ScrollView
          contentContainerStyle={styles.container}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.dateSliderWrapper}>
            <DateSlider />
          </View>

          <TitleHeader />
          <WordBreak />
          <TodayBreak />  
          <RequestBreak />
        </ScrollView>
      </CalendarProvider>
    </View>
  );
}

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
  dateSliderWrapper: {
    marginTop: 0,
    backgroundColor: '#343434',
    marginHorizontal: -20,
  },
});
