/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {faker} from '@faker-js/faker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MusicListMediumItem() {
  const {width} = useWindowDimensions();

  return (
    <View>
      <Image
        source={{
          uri: `https://picsum.photos/${Math.floor(Math.random() * 100)}`,
        }}
        style={{width: width / 4, height: width / 4, borderRadius: 2}}
      />
      <View
        style={{
          width: width / 4,
          height: width / 4,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}>
        <Icon name="play" size={width / 4 / 3.5} color={'white'} />
      </View>
      <Text
        style={{
          color: 'white',
          marginTop: 5,
          width: width / 4,
          fontSize: 13,
          height: 50,
        }}
        numberOfLines={2}>
        {faker.music.songName()}
      </Text>
    </View>
  );
}
