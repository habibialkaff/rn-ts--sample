import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigatorScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { ReduxState } from '../../typings';
import { authorized } from '../authorizedHOC';

class Home extends React.Component<null, null> {
  static navigationOptions: TabNavigatorScreenOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => {
      return (
        <Ionicons name="ios-home" size={32} color={tintColor} />
      );
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is Home Page
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state: ReduxState) {

  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default authorized(connect(mapStateToProps, mapDispatchToProps)(Home));
