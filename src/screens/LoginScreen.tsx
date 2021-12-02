import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useForm} from 'react-hook-form';
import {Input} from '@components/index';

const Container = styled.View`
  display: flex;
  margin-horizontal: 20px;
  margin-top: 200px;
`;

const LoginScreen: React.FC<{}> = () => {
  const {control, clearErrors} = useForm({
    mode: 'onBlur',
  });

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
    </Container>
  );
};

export default LoginScreen;
