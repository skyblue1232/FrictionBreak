import RequestBreak from "@/app/(pages)/(main)/_components/RequestBreak";
import TitleHeader from "@/app/(pages)/(main)/_components/TitleHeader";
import WordBreak from "@/app/(pages)/(main)/_components/WordBreak";
import DateSlider from "@/components/Calendar/DateSlider";
import { CalendarProvider } from "@/contexts/CalendarContext";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { useState } from "react";
import TodayBreak from "./_components/TodayBreak/TodayBreak";
import DetailButton from "@/components/Button/DetailButton";
import { useRouter } from "expo-router";

export default function MainPage() {
  const [isDateSliderVisible, setIsDateSliderVisible] = useState(true);
  const router = useRouter();

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

          <View style={styles.buttonContainer}>
            <DetailButton 
              title='펼쳐보기'
              align="center" 
              onPress={() => router.push("/word-break")} 
            />
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
  buttonContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: -20,
    width: 120,
    height: 36,
    backgroundColor: '#343434',
    borderBottomLeftRadius: 20,
  },
});
