import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components/native';
import LoginStack from './LoginStack';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const RootNavigator = () => (
  <Container>
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  </Container>
);

export default RootNavigator;
