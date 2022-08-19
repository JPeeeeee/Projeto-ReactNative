import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth.route';
import AuthProvider from '../Contexts/auth';

export default function Routes(){
    return (
        <NavigationContainer>
            <AuthProvider>
                <AuthRoutes/>
            </AuthProvider>
        </NavigationContainer>
    )
}