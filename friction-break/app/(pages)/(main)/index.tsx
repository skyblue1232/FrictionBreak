import { View, Text, StyleSheet } from "react-native";

export default function MainPage () {
    return (
        <View style={styles.container}>
            <Text>MainPageDaily곰돌이공냎푀푸댜민</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});