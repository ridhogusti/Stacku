/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import AppNavigation from './src/navigations';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//   'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//   'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

