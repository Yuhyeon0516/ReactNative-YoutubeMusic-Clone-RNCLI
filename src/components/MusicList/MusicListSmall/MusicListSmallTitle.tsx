/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';

export default function MusicListSmallTitle() {
  return (
    <View style={{paddingHorizontal: 10, paddingVertical: 20, gap: 3}}>
      <Text style={{fontSize: 13, color: '#bbb'}}>
        이 노래로 뮤직 스테이션 시작하기
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 28, color: 'white'}}>
        빠른 선곡
      </Text>
    </View>
  );
}
