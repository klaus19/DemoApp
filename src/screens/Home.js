import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from '../styles/Cardstyle';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import DataSingleton from '../Singletons/DataSingleton';

const Card = ({item, navigation}) => {
  const onPressHandler = () => {
    if (item.screen) {
      navigation.navigate(item.screen);
    }
  };
  return (
    <TouchableOpacity style={styles.card} onPress={onPressHandler}>
      <View style={styles.cardInner}>
        <Image source={item.image} style={styles.cardImage} />
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      {item.subtitle && (
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      )}
    </TouchableOpacity>
  );
};

function Home() {
  const navigation = useNavigation();
  const data = DataSingleton.getData();
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <Card item={item} navigation={navigation} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </LinearGradient>
  );
}
export default Home;
