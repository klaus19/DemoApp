import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flash = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to FlashCards</Text>
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

export default Flash;
