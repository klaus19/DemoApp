import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DataSingleton from '../Singletons/DataSingleton';

const shuffledData = data => {
  return data
    .map(item => ({...item, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({sort, ...item}) => item);
};

const Play = () => {
  const [data, setData] = useState(shuffledData(DataSingleton.getData()));

  const shuffleData = () => {
    setData(shuffledData(DataSingleton.getData()));
  };

  const pairs = [];
  for (let i = 0; i < data.length; i += 2) {
    pairs.push(data.slice(i, i + 2));
  }

  const limitedPairs = pairs.slice(0, 4);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <FlatList
            data={limitedPairs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.row}>
                {item.map((card, idx) => (
                  <View key={idx} style={styles.card}>
                    {idx % 2 === 0 ? (
                      <Image source={card.image} style={styles.image} />
                    ) : (
                      <View>
                        <Text style={styles.title}>{card.title}</Text>
                        <Text style={styles.subtitle}>{card.subtitle}</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Shuffle" color="white" onPress={shuffleData} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  cardsContainer: {
    flex: 1,
    marginBottom: 60, // Add space for the button
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  card: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute', // Allows precise positioning
    bottom: 20, // Keeps the button 20 units from the bottom of the screen
    left: '50%', // Positions the left edge at 50% of the screen width
    transform: [{translateX: -50}], // Shifts the button left by half its width to center it horizontally
    alignItems: 'center', // Centers content inside the container horizontally
    justifyContent: 'center', // Centers content inside the container vertically
    backgroundColor: 'tomato', // Button background
    width: 100, // Set button width
    height: 50, // Set button height
    borderRadius: 8, // Rounded corners
  },
});

export default Play;
