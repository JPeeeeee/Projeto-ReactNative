import React from 'react';
import { 
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold } from '@expo-google-fonts/poppins';
import Routes from './src/Routes/Routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })


  if (!fontsLoaded){
    return null
  }
    
  return (
      <Routes/>
    );
}


