import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './LoginStack';

const RootNavigator = () => (
  <NavigationContainer>
    <LoginStack />
  </NavigationContainer>
);

export default RootNavigator;
