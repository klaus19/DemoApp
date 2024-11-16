import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const MenuItem = ({icon, title, onPress}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
    </View>
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const Settings = () => {
  const menuItems = [
    {
      title: 'SELECT YOUR AVATAR',
      icon: require('../../assets/ios/a.png'),
    },
    {
      title: 'Notifications',
      icon: require('../../assets/ios/bell.png'),
    },
    {
      title: 'Progress Track',
      icon: require('../../assets/ios/progress.png'),
    },
    {
      title: 'About',
      icon: require('../../assets/ios/about.png'),
    },
    {
      title: 'Delete Data',
      icon: require('../../assets/ios/delete.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <MenuItem
              icon={item.icon}
              title={item.title}
              onPress={() => console.log(`Pressed ${item.title}`)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F4F4',
  },
  scrollContent: {
    padding: 16,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  menuText: {
    fontSize: 16,
    color: '#007AFF',
    flex: 1,
  },
});

export default Settings;
