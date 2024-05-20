import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import TestScreen from '../screens/TestScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
    </Stack.Navigator>
  );
};
export default AppStack;
