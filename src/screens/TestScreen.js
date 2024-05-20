import React from 'react';
import styles from '../styles/TestsStyle';
import {View, Button} from 'react-native';

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Test 1" onPress={() => console.log('Test1 is pressed')} />
      <Button title="Test 2" onPress={() => console.log('Test2 is pressed')} />
      <Button title="Test 3" onPress={() => console.log('Test3 is pressed')} />
      <Button title="Contact Us" onPress={() => console.log('Contact US')} />
    </View>
  );
};
export default TestScreen;
