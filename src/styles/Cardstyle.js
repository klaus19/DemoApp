import {StyleSheet} from 'react-native';

import {Dimensions} from 'react-native';

const window = Dimensions.get('window'); // Get screen dimensions

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make container take all available space
    padding: 20, // Add equal padding from all sides
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
  },
  gradientBackground: {
    flex: 1,
    width: window.width, // Set width to screen width
    height: window.height, // Set height to screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Distribute cards evenly
    marginBottom: 5,
  },
  card: {
    width: '45%', // Adjust width based on your needs
    height: '45%',
    marginBottom: 40,
    backgroundColor: '#eeeeee', // Change to your desired background color
    borderRadius: 5,
    alignItems: 'center',
  },
  cardImage: {
    width: '70%',
    height: 100, // Adjust height as needed
    resizeMode: 'contain', // Fit image within container
    justifyContent: 'center',
    marginTop: 60,
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 5,
    fontStyle: 'normal',
  },
  aboveText: {
    // Add this style for the above text
    fontSize: 20, // Adjust font size as needed
    marginBottom: 15,
    fontStyle: 'normal',
    color: '#ffffff',
  },
});

export default styles;
