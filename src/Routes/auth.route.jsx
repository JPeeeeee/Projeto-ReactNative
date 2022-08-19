import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home/Home';
import Login from '../Screens/Login/Login';
import Cadastro from '../Screens/Cadastro/Cadastro';

import headerStyle from './styles';

const Stack = createNativeStackNavigator()

export default function AuthRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={headerStyle.Login} />
            <Stack.Screen name='Home' component={Home} options={headerStyle.Home} />
            <Stack.Screen name='Cadastro' component={Cadastro} options={headerStyle.Cadastro} />
        </Stack.Navigator>
    )
}