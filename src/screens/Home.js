import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/Cardstyle';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: 'Take a Test',
    image: require('../images/test.png'),
    screen: 'TestScreen',
  },
  {
    id: 2,
    title: 'Questions',
    image: require('../images/questions.png'),
    screen: 'QuestionsScreen',
  },
  {id: 3, title: 'Instagram', image: require('../images/instagram.png')},
  {id: 4, title: 'Telegram', image: require('../images/telegram.png')},
];

const Card = ({item, navigation}) => {
  const onPressHandler = () => {
    navigation.navigate(item.screen);
  };
  return (
    <TouchableOpacity style={styles.card} onPress={onPressHandler}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

function Home() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.aboveText}>Select an option</Text>
        <View style={styles.row}>
          {data.map(item => (
            <Card key={item.id} item={item} navigation={navigation} />
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}
export default Home;
