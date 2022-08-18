import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import style from "./styles";

export default function Home({ route, navigation }){
    const { text }  = route.params

    return (
        <View style={style.container}>
            <Text>Página Home</Text>
            <Text>{text}</Text>
            <TouchableOpacity onPress={() => null}>
                <View style={style.button}>
                    <Text style={{color: 'white', fontWeight: '500'}}>Oi carina</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}