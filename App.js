import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import MyTabs from './src/screens/BottomNavigation';
import AppStack from './src/navigation/Navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(), 2000;
  }, []);
  return (
    <NavigationContainer>
      <MyTabs>
        <AppStack />
      </MyTabs>
    </NavigationContainer>
  );
};

export default App;
