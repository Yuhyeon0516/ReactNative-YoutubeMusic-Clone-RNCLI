/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import YoutubeMusic from './src/YoutubeMusic';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <YoutubeMusic />
    </SafeAreaProvider>
  );
}

export default App;
