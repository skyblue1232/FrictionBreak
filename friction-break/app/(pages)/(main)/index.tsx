import CalendarBreak from "@/app/(pages)/(main)/_components/CalendarBreak";
import RequestBreak from "@/app/(pages)/(main)/_components/RequestBreak";
import TitleHeader from "@/app/(pages)/(main)/_components/TitleHeader";
import WordBreak from "@/app/(pages)/(main)/_components/WordBreak";
import FloatingButton from "@/components/Button/FloatingButton";
import { StyleSheet, ScrollView, View } from "react-native";

export default function MainPage() {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <TitleHeader />
        <WordBreak />
        <CalendarBreak />
        <RequestBreak />
      </ScrollView>

      <FloatingButton
        onPress={() => console.log('설명서 보기 누름!')}
      />
    </View>
  );
}


export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative', 
    },
    scroll: {
        flex: 1,
        backgroundColor: 'none', 
    },
    container: {
        paddingHorizontal: 20,
    },
});