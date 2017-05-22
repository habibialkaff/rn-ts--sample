import { AuthActionType } from '../actionTypes/auth';
import { AuthAction } from '../typings';

type DispatchFn = (action: AuthAction) => void;

export function login() {
  return (dispatch: DispatchFn) => {
    dispatch({
      type: AuthActionType.LOGIN_REQUEST,
    });

    setTimeout(() => {
      dispatch({
        type: AuthActionType.LOGIN_SUCCESS,
      });
    }, 2000);
  };
}
