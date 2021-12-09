import {IAuthReducerState, IAction, AuthAction} from './types';

const authReducer = (
  prevState: IAuthReducerState,
  action: IAction,
): IAuthReducerState => {
  const {type, payload} = action;

  switch (type) {
    case AuthAction.REFRESHTOKEN:
    case AuthAction.SIGNIN:
      return {
        ...prevState,
        userToken: payload,
      };

    case AuthAction.SIGNOUT:
      return {
        ...prevState,
        userToken: null,
      };
    default:
      return prevState;
  }
};

export default authReducer;
