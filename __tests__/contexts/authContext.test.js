import React, {useContext} from 'react';
import {render, fireEvent, cleanup, act} from '@testing-library/react-native';
import {AuthContextProvider, AuthContext} from '@contexts/authContext';
import {Text, Pressable} from 'react-native';

describe('test Auth context', () => {
  let tokenText;
  let loginButton;
  let logoutButton;

  beforeEach(() => {
    const textTestId = 'textTestId';
    const TestComponent = () => {
      const {signIn, signOut, userToken} = useContext(AuthContext);

      return (
        <>
          <Text testID={textTestId}>{userToken}</Text>
          <Pressable onPress={signIn} accessibilityRole="login" />
          <Pressable onPress={signOut} accessibilityRole="logout" />
        </>
      );
    };
    const {getByTestId, getByRole} = render(
      <AuthContextProvider>
        <TestComponent />
      </AuthContextProvider>,
    );
    tokenText = getByTestId(textTestId);
    loginButton = getByRole('login');
    logoutButton = getByRole('logout');
  });

  it('should sets the userToken when login succesfully', async () => {
    // do not have user token initially
    expect(tokenText).not.toHaveTextContent();

    await act(async () => {
      fireEvent.press(loginButton);
    });

    expect(tokenText).toHaveTextContent('userToken');
  });

  it('should reset the userToken to null when logout successfully', async () => {
    await act(async () => {
      fireEvent.press(loginButton);
    });

    expect(tokenText).toHaveTextContent('userToken');

    await act(async () => {
      fireEvent.press(logoutButton);
    });

    expect(tokenText).not.toHaveTextContent();
  });

  afterAll(cleanup);
});
