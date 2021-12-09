import React, {useReducer, createContext, useContext} from 'react';
import {
  IAuthReducerState,
  IAuthContextProviderProps,
  AuthAction,
} from './types';
import authReducer from './reducer';
import {
  makeContextConsumerHook,
  createContextProviderHOC,
} from '../contextHelper';

const initialState: IAuthReducerState = {
  userToken: null,
  isLoading: false,
  isSignout: false,
};

const defaultContext = {
  ...initialState,
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = createContext(defaultContext);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const signIn = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve('sucess');
      }, 1000),
    );
    dispatch({type: AuthAction.SIGNIN, payload: 'userToken'});
  };

  const signOut = async () =>
    dispatch({type: AuthAction.SIGNOUT, payload: null});

  return (
    <AuthContext.Provider value={{...authState, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => makeContextConsumerHook(AuthContext);

export const withAuthContext = createContextProviderHOC(AuthContextProvider);
