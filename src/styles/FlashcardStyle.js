import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#ffffff',
    alignItems: 'flex-start', // Align tabs to the left
    width: 100, // Tab bar width
  },
  tabStyle: {
    width: 100, // Individual tab width
    alignItems: 'center',
  },
  label: {
    color: 'black',
    fontSize: 14,
  },
  indicator: {
    backgroundColor: 'blue',
    width: 5, // Thickness of the indicator
    left: 0, // Align the indicator with the left side
  },
});

export default styles;
