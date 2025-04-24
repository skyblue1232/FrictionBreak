import { View, Text, StyleSheet } from "react-native";

export default function MainPage () {
    return (
        <View style={styles.container}>
            <Text>MainPage곰돌이공냉푀푸댜민냉면</Text>
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