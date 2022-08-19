import { StyleSheet } from "react-native";
import theme from "../../Global/theme";

const style = StyleSheet.create({
    button: {
        height: 50,
        minWidth: 100,
        padding: 15,
        margin: 10,
        backgroundColor: theme.colors.graphite,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    text: {
        color: theme.colors.creamWhite,
        fontFamily: theme.fonts.semiBold
    }
})

export default style