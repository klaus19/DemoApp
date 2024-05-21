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

  // Function to shuffle the data
  const shuffleData = () => {
    setData(shuffledData(DataSingleton.getData()));
  };

  // Create pairs of data
  const pairs = [];
  for (let i = 0; i < data.length; i += 2) {
    pairs.push(data.slice(i, i + 2));
  }

  // Limit to only 4 pairs
  const limitedPairs = pairs.slice(0, 4);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <View style={styles.container}>
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
        <View style={styles.buttonContainer} backgroundColor="tomato">
          <Button
            title="Shuffle"
            color="white"
            justifyContent="center"
            alignItems="center"
            onPress={shuffleData}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  card: {
    width: '45%', // Adjust to control card width
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
    width: 100,
    height: 50,
    flex: 1, // Makes the container take up the entire available space
    position: 'relative', // Enables absolute positioning for child element
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Play;
