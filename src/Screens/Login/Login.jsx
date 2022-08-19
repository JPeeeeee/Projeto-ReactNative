import React from "react";
import style from "./styles";
import { View, TouchableOpacity, TextInput, Image } from "react-native";
import Button from "../../Components/Button/Button";

export default function Login({ navigation }){
    return (
        <View style={style.container}>
            <View style={style.viewImage}>
                <Image style={style.image} source={{uri : 'https://i.pinimg.com/originals/be/5c/94/be5c943776fb30b60b9dbc25a7234a42.jpg'}} />
            </View>
            <TextInput placeholder="Email" style={style.input} />
            <TextInput placeholder="Senha" style={style.input} />
            <View style={style.buttons}>
                <TouchableOpacity style={style.button} onPress={ () => navigation.navigate('Home') }>
                    <Button title='Entrar'/>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={ () => navigation.navigate('Cadastro') }>
                    <Button title='Cadastro'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}