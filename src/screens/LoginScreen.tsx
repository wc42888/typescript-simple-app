import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Input} from '@components/index';

const LoginScreen: React.FC<{}> = () => {
  const {control, clearErrors} = useForm({
    mode: 'onBlur',
  });

  return (
    <>
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
        clearErrors={clearErrors}
      />
    </>
  );
};

export default LoginScreen;
