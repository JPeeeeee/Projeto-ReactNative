import React from "react";
import style from "./styles";
import { View, Text, Button, TextInput } from "react-native";

export default function Splash({ navigation }){
    return (
        <View style={style.container}>
            <Text>Teste</Text>
            <Button title="Ir para Home" style={style.button} onPress={() => navigation.navigate('Home', {
                text: 'texto de parametros'
            })} />
            <TextInput placeholder="Nome..." style={style.input} />
        </View>
    )
}