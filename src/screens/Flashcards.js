import * as React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

// Define the FirstRoute component
const FirstRoute = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
    }}>
    <Text>First Route</Text>
  </View>
);

// Define the SecondRoute component
const SecondRoute = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
    }}>
    <Text>Second Route</Text>
  </View>
);

const ThirdRoute = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
    }}>
    <Text>Third Route</Text>
  </View>
);

export default function Flashcards() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const routes = [
    {key: 'first', title: 'Easy'},
    {key: 'second', title: 'Medium'},
    {key: 'third', title: 'Advanced'},
  ];

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
