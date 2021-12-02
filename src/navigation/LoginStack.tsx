import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, MfaScreen} from '@screens/index';

const Stack = createNativeStackNavigator();

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Mfa" component={MfaScreen} />
  </Stack.Navigator>
);

export default LoginStack;
