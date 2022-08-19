import { StyleSheet } from "react-native";
import theme from "../../Global/theme";

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.creamWhite, 
        justifyContent: 'center',
        marginTop: 150,
        alignItems: 'center'
    },

    input: {
        backgroundColor: theme.colors.pureWhite,
        width: 300,
        height: 50,
        padding: 15,
        margin: 10,
        borderRadius: 10
    },

    input2: {
        backgroundColor: theme.colors.pureWhite,
        width: 140,
        height: 50,
        padding: 15,
        margin: 10,
        borderRadius: 10
    },

    scroll: {
        backgroundColor: theme.colors.creamWhite,
    },

    button: {
        width: 320
    }
})

export default style