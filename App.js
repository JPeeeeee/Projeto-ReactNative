import React, { useEffect, useCallback } from 'react';
import Routes from './src/Routes/Routes';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';

import { View, Text } from 'react-native'


export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Thin': require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
  })

  useEffect(() => {
    async function prepare(){
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded){
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded){
    return null
  }
    
  return (
      <>
        <View onLayout={onLayoutRootView}/>
        <Routes/>
      </>
    );
}


