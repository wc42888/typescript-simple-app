/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from '@redux/store';
import RootNavigator from '@navigation/RootNavigator';

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
