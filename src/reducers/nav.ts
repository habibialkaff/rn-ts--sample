import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';

// AppNavigator.router.getActionForPathAndParams('Authorized')
const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.navigate({ routeName: 'Home' }),
);

export const nav = (state = initialState, action = {}) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
