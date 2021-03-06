import React, {useContext, Context} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {useForm, FieldValues} from 'react-hook-form';
import {Input, Button} from '@components/index';
import {BLUE} from '@config/colors';
import {useAuthContext} from '@contexts/index';

const Container = styled.View`
  display: flex;
  margin-horizontal: 20px;
  margin-top: 200px;
`;

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: BLUE,
    height: 50,
    width: 100,
    alignSelf: 'flex-end',
  },
});

const LoginScreen: React.FC<{}> = () => {
  const {control, clearErrors, handleSubmit} = useForm({
    mode: 'onBlur',
  });

  const {signIn} = useAuthContext();

  const onLogin = async (data: FieldValues) => signIn();

  return (
    <Container>
      <Input
        placeholder="Username"
        control={control}
        name="username"
        rules={{
          required: 'username is required',
        }}
        clearErrors={clearErrors}
      />
      <Input
        placeholder="Password"
        control={control}
        name="password"
        rules={{
          required: 'username is required',
        }}
        clearErrors={clearErrors}
      />
      <Button
        style={styles.loginButton}
        buttonLabel="login"
        onClick={handleSubmit(onLogin)}
      />
    </Container>
  );
};

export default LoginScreen;
