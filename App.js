import React, { Component } from 'react';
import AppNavigator from './src/config/routes'
import { BackHandler, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react';

import axios from 'axios'
import { URL } from './src/config/env'
axios.defaults.baseURL = URL

function getCurrentRouteName(navigationState) {
  if (!navigationState) { return null }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}


class App extends Component {

  state = { current: null, previous: null }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.showAlert(this.state));
    StatusBar.setBackgroundColor('#000', true)
  }

  showAlert(state) {
    if (this.state.current === 'Home' || this.state.current === 'Welcome') {
      BackHandler.exitApp();
      return true;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator
            onNavigationStateChange={(prevState, currentState) => {
              this.setState({
                previous: getCurrentRouteName(prevState),
                current: getCurrentRouteName(currentState)
              })
            }}
          />
        </PersistGate>
      </Provider>
    );
  }

}

export default App