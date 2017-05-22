import React from 'react';
import {
  addNavigationHelpers, StackNavigator, TabNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import Auth from './containers/auth';
import Home from './containers/home';
import Profile from './containers/profile';
import { ReduxState } from './typings';

const AuthorizedNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#d01380',
    },
    initialRouteName: 'Home',
    animationEnabled: true,
  },
);

export const AppNavigator = StackNavigator(
  {
    Authorized: {
      screen: AuthorizedNavigator,
      navigationOptions: { header: null },
    },
    Auth: {
      screen: Auth,
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'Authorized',
  },
);

interface Props {
  dispatch: (any) => void;
  nav: any;
}

class App extends React.Component<Props, null> {
  setNavigationProp() {
    return addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });
  }

  render() {
    return (
      <AppNavigator navigation={this.setNavigationProp()} />
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  nav: state.navState,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);
