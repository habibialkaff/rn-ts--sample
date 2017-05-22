import hoistNonReactStatic from 'hoist-non-react-statics';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { ReduxState } from '../typings';

interface Props {
  isLoggedIn: boolean;
  navigation: any;
  loadPackage: () => void;
  loadEmployees: () => void;
}

interface State {
  isReady: boolean;
}

export function authorized(WrappedComponent) {
  class Authorized extends React.Component<Props, State> {
    state: State = {
      isReady: false,
    };

    componentWillMount() {
      if (!this.props.isLoggedIn) {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Auth' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      } else {
        this.setState({
          isReady: true,
        });
      }
    }

    render() {
      return this.state.isReady ? <WrappedComponent /> : <View><Text>Loading...</Text></View>;
    }
  }

  const mapStateToProps = (state: ReduxState) => {
    const { authState } = state;
    return {
      isLoggedIn: authState.isLoggedIn,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };

  hoistNonReactStatic(Authorized, WrappedComponent);

  return connect(mapStateToProps, mapDispatchToProps)(Authorized);
}
