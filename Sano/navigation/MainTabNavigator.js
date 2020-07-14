import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';




const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    }, 
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerMode: 'none',
            headerVisible:false,
            header: null,
          }

    }
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      focused
      ? <Image source={Images.homeFocus} style={styles.icon} />
      : <Image source={Images.home} style={styles.icon} />
    ),
    tabBarOptions: {
      activeTintColor: '#614595',
      inactiveTintColor: '#a6a6a6',
    },
  };



  const styles = StyleSheet.create({
    icon: {
      // width: (Dimensions.get('window').width)/15,
      // height: (Dimensions.get('window').height)/25,
      // marginTop: (Dimensions.get('window').height)/333,
      width: 26,
      height: 26,
      marginTop: 4,
      alignItems: 'stretch'
    },
  });