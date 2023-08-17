import {View, Text} from 'react-native';
import React from 'react';

export default function HeaderBackground() {
  return (
    <View
      style={{
        position: 'absolute',
        height: 300,
        width: '100%',
        backgroundColor: '#222',
      }}>
      <Text>HeaderBackground</Text>
    </View>
  );
}
