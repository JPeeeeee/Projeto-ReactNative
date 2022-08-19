import React from "react";
import { View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Button from "../../Components/Button/Button";
import style from "./styles";

export default function Cadastro({ navigation }){

    return (
        <ScrollView style={style.scroll}>
            <View style={style.container}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TextInput placeholder="Nome" style={style.input2} />
                    <TextInput placeholder="Sobrenome" style={style.input2} />
                </View>
                <TextInput placeholder="Rua" style={style.input} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TextInput placeholder="CEP" style={style.input2} />
                    <TextInput placeholder="Número" style={style.input2} />
                </View>
                <TextInput placeholder="Referência" style={style.input} />

                <TouchableOpacity style={style.button} onPress={ () => navigation.navigate('Login')}>
                    <Button title='Cadastre-se' />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}