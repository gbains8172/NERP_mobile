import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen'

export default LoginStack = createStackNavigator(
  {
    Landing: LandingScreen,
    Login: LoginScreen,
  },{
    initialRouteName: 'Landing',
    defaultNavigationOptions: {
      headerMode: 'none',
      headerVisible:false,
      header: null,
    }
  }
);
