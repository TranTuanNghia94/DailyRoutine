import { createTheme, ThemeProvider } from '@rneui/themed';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { bg } from './src/utils/color';
import RouteWrapper from './src/router/route';
import { NavigationContainer } from '@react-navigation/native';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bg.bgPrimary5}}>
        <NavigationContainer>
          <RouteWrapper />
        </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;
