

import { createTheme, ThemeProvider } from '@rneui/themed';
import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignIn from './src/scences/sign-in/sign-in';
import { SafeAreaView } from 'react-native';
import { bg } from './src/utils/color';
import Home from './src/scences/home/home';
import ScreenWrapper from './src/hoc/ScreenWrapper/Swrapper';


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
    <SafeAreaView style={{ flex: 1, backgroundColor: bg.bgPrimary0, }}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
}


export default App;
