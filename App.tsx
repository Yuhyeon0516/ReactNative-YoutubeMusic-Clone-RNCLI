/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import YoutubeMusic from './src/YoutubeMusic';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {getCatogery, getToken} from './src/hooks/useSpotify';

function App(): JSX.Element {
  useEffect(() => {
    // getToken();
    // getCatogery();
  }, []);

  return (
    <SafeAreaProvider>
      <YoutubeMusic />
    </SafeAreaProvider>
  );
}

export default App;
