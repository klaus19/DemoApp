import {createStackNavigator} from '@react-navigation/stack';
import QuestionsScreen from '../screens/QuestionsScreen';
import TestScreen from '../screens/TestScreen';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={QuestionsScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
    </Stack.Navigator>
  );
};
export default AppStack;
