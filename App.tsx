/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,

} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import GlobalProvider from './src/Provider/GlobalProvider';
import MainSrens from './src/screens/MainSrens';







function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';


  return (
    <GlobalProvider>
      <MainSrens/>
    </GlobalProvider>
  );
}



const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default App;
