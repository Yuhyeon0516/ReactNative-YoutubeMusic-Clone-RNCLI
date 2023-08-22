/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MusicListLargeTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#999',
            padding: 3,
            borderRadius: 100,
            marginRight: 10,
          }}>
          <Icon name="rewind" size={24} color={'#999'} />
        </View>
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
          돌아보기
        </Text>
      </View>
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
