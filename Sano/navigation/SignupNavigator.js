import { createStackNavigator } from 'react-navigation-stack';

import Signup1Screen from '../screens/SignUp1Screen';
import Signup2Screen from '../screens/SignUp2Screen';
import Signup3Screen from '../screens/SignUp3Screen';
import Onboarding1Screen from '../screens/Onboarding1Screen';
import Onboarding2Screen from '../screens/Onboarding2Screen';
import Onboarding3Screen from '../screens/Onboarding3Screen';


export default SignupStack = createStackNavigator(
  {
    Signup1: Signup1Screen,
    Signup2: Signup2Screen,
    Signup3: Signup3Screen,
    Onboarding1: Onboarding1Screen, 
    Onboarding2: Onboarding2Screen, 
    Onboarding3: Onboarding3Screen, 
  },{
    initialRouteName: 'Signup1',
    defaultNavigationOptions: {
      headerMode: 'none',
      headerVisible:false,
      header: null,
    }
  }
);
