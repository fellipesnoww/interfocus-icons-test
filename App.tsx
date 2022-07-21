import React from 'react';
import { Home } from './src/screens/Home';
import {useFonts} from 'expo-font';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export default function App() {
  
  const [fontsLoaded] = useFonts({    
    "Interfocus-Brand": require('./src/assets/fonts/interfocus-brands.ttf'),    
    "Interfocus-Default": require('./src/assets/fonts/interfocus-default.ttf'),   
    "Interfocus-Fill": require('./src/assets/fonts/interfocus-fill.ttf'),    
  });

  if(fontsLoaded){    
      return (
        <ThemeProvider theme={theme}>
          <Home/>
        </ThemeProvider>
      );
  }

  return <View />
}
