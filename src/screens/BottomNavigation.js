import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import AppStack from '../navigation/Navigation';
import Play from './PlayScreen';
import Flash from './Flashcards';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'green',
      }}>
      <Tab.Screen name="Home" component={AppStack} />
      <Tab.Screen name="Play" component={Play} />
      <Tab.Screen name="Flashing" component={Flash} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
