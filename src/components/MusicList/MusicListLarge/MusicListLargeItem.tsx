/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {faker} from '@faker-js/faker';

export default function MusicListLargeItem() {
  const {width} = useWindowDimensions();

  return (
    <View>
      <Image
        source={{
          uri: `https://picsum.photos/${Math.floor(Math.random() * 100)}`,
        }}
        style={{width: width / 2.5, height: width / 2.5, borderRadius: 4}}
      />
      <View
        style={{
          width: width / 2.5,
          height: width / 2.5,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}>
        <Icon name="play" size={width / 2.5 / 3.5} color={'white'} />
      </View>
      <Text
        style={{
          color: 'white',
          marginTop: 5,
          width: width / 2.5,
          fontSize: 13,
          height: 50,
        }}
        numberOfLines={2}>
        {faker.music.songName()}
      </Text>
    </View>
  );
}
