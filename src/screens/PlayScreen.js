import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DataSingleton from '../Singletons/DataSingleton';
import catImage from '../images/cat1.png'; // Import the image

const shuffledData = data => {
  return data
    .map(item => ({...item, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({sort, ...item}) => item);
};

const selectRandomItems = (data, count) => {
  const shuffled = shuffledData(data);
  return shuffled.slice(0, count);
};

const Play = () => {
  const [data, setData] = useState(
    selectRandomItems(DataSingleton.getData(), 4),
  );
  const [counter, setCounter] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);

  const shuffleData = () => {
    setData(selectRandomItems(DataSingleton.getData(), 4));
    setCounter(0); // Reset the counter
    setSelectedImageIndex(null); // Reset the selected image index
    setSelectedTextIndex(null); // Reset the selected text index
  };

  const handleImageClick = index => {
    setSelectedImageIndex(index);
  };

  const handleTextClick = index => {
    setSelectedTextIndex(index);
  };

  // Check if the selected pairs match the correct pairs
  const isCorrectPairClicked =
    selectedImageIndex !== null &&
    selectedTextIndex !== null &&
    selectedTextIndex === selectedImageIndex + 4;

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.topRightContainer}>
          <Image source={catImage} style={styles.smallImage} />
          <Text style={styles.counter}>{counter}</Text>
        </View>
        <Text style={styles.middleText}>Select correct pairs</Text>
        <View style={styles.columnsContainer}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => `image-${index}`}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => handleImageClick(index)}
                activeOpacity={0.8}>
                <View
                  style={[
                    styles.card,
                    selectedImageIndex === index && styles.selectedImage,
                  ]}>
                  <Image source={item.image} style={styles.image} />
                </View>
              </TouchableOpacity>
            )}
          />
          <FlatList
            data={data}
            keyExtractor={(item, index) => `text-${index}`}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => handleTextClick(index)}
                activeOpacity={0.8}>
                <View
                  style={[
                    styles.card,
                    selectedTextIndex === index && styles.selectedText,
                  ]}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <Button title="Shuffle" color="white" onPress={shuffleData} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 40,
  },
  topRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Margin below the image and counter
    justifyContent: 'flex-end',
  },
  smallImage: {
    width: 40, // Adjust the size of the small image
    height: 40,
    marginRight: 10,
  },
  counter: {
    fontSize: 20,
    color: 'white',
  },
  middleText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20, // Adjust the vertical margin as needed
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 5,
    height: 120, // Fixed height for the cards
    width: 150, // Fixed width to match image and text cards
  },
  image: {
    width: 80,
    height: 80,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20, // Adjust margin as needed
  },
  buttonContainer: {
    width: 100,
    height: 50,
    backgroundColor: 'tomato',
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 20,
  },
  selectedImage: {
    backgroundColor: 'green',
  },
  selectedText: {
    backgroundColor: 'green',
  },
});

export default Play;
