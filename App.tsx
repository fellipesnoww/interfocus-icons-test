import React from 'react';
import { Home } from './src/screens/Home';
import {useFonts} from 'expo-font';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export default function App() {
  
  //Informa quais serão as fontes externas que serão carregadas
  const [fontsLoaded] = useFonts({    
    "Interfocus-Brand": require('./src/assets/fonts/brands/interfocus-brands.ttf'),    
    "Interfocus-Default": require('./src/assets/fonts/default/interfocus-default.ttf'),   
    "Interfocus-Fill": require('./src/assets/fonts/fill/interfocus-fill.ttf'),    
  });

  //Mantem o app "parado" enquanto as fontes não são carregadas
  if(fontsLoaded){    
      return (
        <ThemeProvider theme={theme}>
          <Home/>
        </ThemeProvider>
      );
  }

  return <View />
}
