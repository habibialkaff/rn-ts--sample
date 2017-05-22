
import autobind from 'autobind-decorator';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

interface Props {
  ssoLogin: () => void;
  navigation: any;
  isLoggedIn: boolean;
}

class Auth extends React.Component<Props, null> {
  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isLoggedIn) {
      const resetAction = NavigationActions.navigate({
        routeName: 'Home',
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  @autobind
  signIn() {
    this.props.ssoLogin();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <Button title="Sign In" color="#FFFFFF" onPress={this.signIn} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  childContainer: {
    backgroundColor: 'blue',
  },
});

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authState.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ssoLogin: () => {
      dispatch(login());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
