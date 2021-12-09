import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components/native';
import LoginStack from './LoginStack';
import {withAuthContext} from '@contexts/authContext';

const RootNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default withAuthContext(RootNavigator);
