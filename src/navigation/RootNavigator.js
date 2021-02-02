import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen/splashScreen';
import LoginScreen from '../screens/login/login';
import Signup from '../screens/signup/signup';
import Home from '../screens/home/home';
// import AppNavigator from './AppNavigator';
// import Welcome from '../screens/welcome';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      {/* <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="AppNavigator" component={AppNavigator} /> */}
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
