import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QuestionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Questions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuestionsScreen;
