import { Ionicons } from '@expo/vector-icons';
import { AppLoading, Font } from 'expo';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { AppWithNavigationState } from './AppNavigator';
import configureStore from './store/configureStore';

const store = configureStore({});

interface State {
  isReady: boolean;
}

export default class Root extends React.Component<null, State> {
  state = { isReady: false };

  async componentDidMount() {
    await Font.loadAsync(Ionicons.font);

    this.setState({
      isReady: true,
    });
  }

  render() {
    return this.state.isReady ? (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <AppWithNavigationState />
        </View>
      </Provider>
    ) : <AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
