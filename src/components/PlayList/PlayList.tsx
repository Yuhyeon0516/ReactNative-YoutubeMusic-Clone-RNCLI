import {View, Image} from 'react-native';
import React from 'react';
import PlayListMini from './PlayListMini';

export default function PlayList() {
  return (
    <View
      style={{
        backgroundColor: '#222',
        borderBottomColor: '#666',
        borderBottomWidth: 1,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
      }}>
      <Image
        source={{uri: 'https://picsum.photos/50'}}
        style={{width: 40, height: 40}}
      />
      {/* <PlayListFull /> */}
      <PlayListMini />
    </View>
  );
}
