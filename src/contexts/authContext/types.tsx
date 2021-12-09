import {ReactNode} from 'react';

export type UserToken = string | null;

export interface IAuthReducerState {
  userToken: UserToken;
  isLoading: boolean;
  isSignout: boolean;
}

export interface IAuthContextProviderProps {
  children?: ReactNode;
}

export enum AuthAction {
  SIGNIN,
  SIGNOUT,
  REFRESHTOKEN,
}

export interface IAction {
  type: AuthAction;
  payload: UserToken;
}
