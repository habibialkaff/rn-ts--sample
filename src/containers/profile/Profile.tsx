import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigatorScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { ReduxState } from '../../typings';
import { authorized } from '../authorizedHOC';

class Profile extends React.Component<null, null> {
  static navigationOptions: TabNavigatorScreenOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => {
      return (
        <Ionicons name="ios-people" size={32} color={tintColor} />
      );
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is Profile Page
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

export default authorized(connect(mapStateToProps, mapDispatchToProps)(Profile));
