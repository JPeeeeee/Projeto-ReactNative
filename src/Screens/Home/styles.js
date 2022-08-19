import { StyleSheet } from "react-native";
import theme from "../../Global/theme";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.creamWhite,
        alignItems: 'center'
    },
    
    image: {
        height: 200,
        width: 200,
        marginTop: -20,
        marginBottom: 60
    }
})

export default style