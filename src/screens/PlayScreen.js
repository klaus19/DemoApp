import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Play = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Play</Text>
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

export default Play;
