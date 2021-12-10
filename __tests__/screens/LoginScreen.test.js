import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {LoginScreen} from '@screens/index';
import * as authContext from '@contexts/authContext';

describe('test Login Screen', () => {
  it('given all validation passes, should fire sign in function when user click on log in button ', async () => {
    const signIn = jest.fn();
    jest.spyOn(authContext, 'useAuthContext').mockImplementation(() => ({
      signIn,
    }));

    const {getByText} = render(<LoginScreen />);
    const loginButton = getByText('login');

    fireEvent.press(loginButton);

    expect(signIn).toHaveBeenCalled();
  });
});
