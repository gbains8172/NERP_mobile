import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginNavigator';
import SignupNavigator from './SignupNavigator';

export default createAppContainer(
  createSwitchNavigator({
   // MainNav: MainTabNavigator,
    SignupNav: SignupNavigator,
    LoginNav: LoginNavigator,
  },{
    initialRouteName: 'LoginNav',
  },)
);