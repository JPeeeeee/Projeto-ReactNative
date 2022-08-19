import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth.route';

export default function Routes(){
    return (
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
    )
}