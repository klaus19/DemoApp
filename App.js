import React, {useEffect} from 'react';
import {NavigationContainer, View} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import MyTabs from './src/screens/BottomNavigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
