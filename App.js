import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/Screens/Splash/Splash';
import Home from './src/Screens/Home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={style.splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = {
  splash: {
    title: 'Welcome',
    headerStyle:{
      backgroundColor: '#2D2A20',
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25
    },
    headerTitleAlign: 'center',
    statusBarStyle: 'inverted',
    statusBarTranslucent: true
  }
}
