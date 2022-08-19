import { StyleSheet } from "react-native";
import theme from "../../Global/theme";

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.creamWhite,
        textAlign: 'center'
    },
    
    item: {
        height: 50,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.pureWhite,
        borderRadius: 10
    }
})

export default style