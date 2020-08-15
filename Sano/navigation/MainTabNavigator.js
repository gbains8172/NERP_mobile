import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Images from '../assets/Images/Images';


import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';





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
      ? <Image source={Images.HomeFocused} style={styles.icon} />
      : <Image source={Images.Home} style={styles.icon} />
    ),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#a6a6a6',
      labelStyle: {
        fontFamily: "IBM Plex Mono"
      },
    },
  };


const ExploreStack = createStackNavigator(
    {
        Explore: ExploreScreen,
    }, 
    {
        initialRouteName: 'Explore',
        defaultNavigationOptions: {
            headerMode: 'none',
            headerVisible:false,
            header: null,
          }

    }
);

ExploreStack.navigationOptions = {
    tabBarLabel: 'Explore',
    tabBarIcon: ({ focused }) => (
      focused
      ? <Image source={Images.ExploreFocused} style={styles.icon} />
      : <Image source={Images.Explore} style={styles.icon} />
    ),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#a6a6a6',
      labelStyle: {
        fontFamily: "IBM Plex Mono"
      },
    },
  };

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    }, 
    {
        initialRouteName: 'Profile',
        defaultNavigationOptions: {
            headerMode: 'none',
            headerVisible:false,
            header: null,
          }

    }
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
      focused
      ? <Image source={Images.ProfileFocused} style={styles.icon} />
      : <Image source={Images.Profile} style={styles.icon} />
    ),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#a6a6a6',
      labelStyle: {
        fontFamily: "IBM Plex Mono"
      },

    },
  };


  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
      alignItems: 'stretch'
    },
  });

  export default createBottomTabNavigator({
    HomeStack,
    ExploreStack,
    ProfileStack
  },
  {
    initialRouteName: 'HomeStack',
  });