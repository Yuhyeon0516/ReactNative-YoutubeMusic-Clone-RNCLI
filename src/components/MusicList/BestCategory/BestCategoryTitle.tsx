/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

export default function BestCategoryTitle() {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
        추천 카테고리 20
      </Text>
    </View>
  );
}
