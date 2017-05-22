import { AuthActionType } from '../actionTypes/auth';
import { AuthAction, AuthState } from '../typings';

const initialState: AuthState = {
  isFetching: false,
  isLoggedIn: false,
};

export function auth(state: AuthState = initialState, action: AuthAction = {}): AuthState {
  switch (action.type) {
    case AuthActionType.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}
