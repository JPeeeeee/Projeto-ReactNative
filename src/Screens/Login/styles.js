import { StyleSheet } from "react-native";
import theme from "../../Global/theme";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.creamWhite,
        alignItems: "center",
        justifyContent: 'center'
    },

    input: {
        backgroundColor: theme.colors.pureWhite,
        width: 250,
        height: 50,
        padding: 15,
        margin: 10,
        borderRadius: 10
    },

    button: {
        width: 125
    },

    buttons: {
        height: 50,
        flexDirection: 'row',
        marginTop: 30
    },

    image: {
        height: 200,
        width: 200,
        marginTop: -20,
        marginBottom: 60
    }
})

export default style