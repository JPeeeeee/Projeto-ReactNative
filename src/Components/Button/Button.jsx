import React from "react";
import { View, Text } from 'react-native';
import style from "./styles";

export default function Button({ title }){
    return (
        <View style={style.button}>
            <Text style={style.text}>{title}</Text>
        </View>
    )
}