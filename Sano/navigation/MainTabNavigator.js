import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Images from '../assets/Images/Images';


import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AlertScreen from '../screens/AlertScreen';
import AddPostScreen from '../screens/AddPostScreen';






const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    }, 
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerTitle: 'SANO',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'IBM Plex Mono'},
            
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


const AlertStack = createStackNavigator(
    {
        Alert: AlertScreen,
    }, 
    {
        initialRouteName: 'Alert',
        defaultNavigationOptions: {
            headerMode: 'none',
            headerVisible:false,
            header: null,
          }

    }
);

AlertStack.navigationOptions = {
    tabBarLabel: 'Alert',
    tabBarIcon: ({ focused }) => (
      focused
      ? <Image source={Images.AlertFocused} style={styles.icon} />
      : <Image source={Images.Alert} style={styles.icon} />
    ),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#a6a6a6',
      labelStyle: {
        fontFamily: "IBM Plex Mono"
      },

    },
  };

  const AddPostStack = createStackNavigator(
    {
      AddPost: AddPostScreen,
    }, 
    {
        initialRouteName: 'AddPost',
        defaultNavigationOptions: {
            headerMode: 'none',
            headerVisible:false,
            header: null,
            showLabel: false,

          }

    }
  );

  AddPostStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({ focused }) => (
      focused
      ? <Image source={Images.ExitPost} style={styles.addIcon} />
      : <Image source={Images.AddPost} style={styles.addIcon} />
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
    addIcon: {
      width: 40,
      height: 40,
      alignItems: 'stretch', 
      marginTop: '20%'
    },
    header: {
      fontFamily: 'IBM Plex Mono'
    }

  });

  export default createBottomTabNavigator({
    HomeStack,
    ExploreStack,
    AddPostStack,
    AlertStack,
    ProfileStack,
  },
  {
    initialRouteName: 'HomeStack',
  });