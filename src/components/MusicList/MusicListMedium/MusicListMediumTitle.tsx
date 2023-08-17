import {View, Text} from 'react-native';
import React from 'react';

export default function MusicListMediumTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
        다시듣기
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 100,
          paddingHorizontal: 10,
          paddingVertical: 4,
        }}>
        <Text style={{color: 'white', fontSize: 12}}>더보기</Text>
      </View>
    </View>
  );
}
