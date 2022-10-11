import { StyleSheet } from "react-native";
import theme from "../../Global/theme";

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.creamWhite,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 0
    },
    
    item: {
        height: 50,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.pureWhite,
        borderRadius: 10
    },

    image: {
        height: 250,
        width: 300,
        margin: 20,
        borderRadius: 10,
    }
})

export default style