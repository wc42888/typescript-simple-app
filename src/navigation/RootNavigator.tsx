import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './LoginStack';
import MainAppStack from './MainAppStack';
import {withAuthContext, useAuthContext} from '@contexts/authContext';

const RootNavigator = () => {
  const {userToken} = useAuthContext();

  const isLoggedIn = useMemo(() => !!userToken, [userToken]);

  const renderStack = () => (isLoggedIn ? <MainAppStack /> : <LoginStack />);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>{renderStack()}</NavigationContainer>
    </SafeAreaView>
  );
};

export default withAuthContext(RootNavigator);
