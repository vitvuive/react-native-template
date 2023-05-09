/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import Stacks from '@/stacks';
import { navigationRef } from '@/stacks/NavigationService';

import { store } from './src/core/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}>
        <Stacks />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
