import { createStackNavigator } from 'react-navigation-stack';

import Signup1Screen from '../screens/SignUp1Screen';
import Signup2Screen from '../screens/SignUp2Screen';
import Signup3Screen from '../screens/SignUp3Screen';

export default SignupStack = createStackNavigator(
  {
    Signup1: Signup1Screen,
    Signup2: Signup2Screen,
    Signup3: Signup3Screen,
  },{
    initialRouteName: 'Signup1',
    defaultNavigationOptions: {
      headerMode: 'none',
      headerVisible:false,
      header: null,
    }
  }
);
