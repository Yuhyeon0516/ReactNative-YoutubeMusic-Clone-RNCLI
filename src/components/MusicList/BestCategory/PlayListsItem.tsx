/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TrackItem} from '../../../hooks/useSpotify';

export default function PlayListsItem({
  item,
  index,
}: {
  item: TrackItem;
  index: number;
}) {
  return (
    <View
      style={{
        height: 100,
        width: '100%',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: 'whitesmoke',
              fontWeight: 'bold',
              fontSize: 30,
              width: 45,
              textAlign: 'center',
              height: 30,
              marginHorizontal: 5,
              textShadowColor: '#eee999',
              textShadowRadius: 5,
              textShadowOffset: {
                width: 2,
                height: -2,
              },
            }}>
            {index + 1}
          </Text>
          <Image
            source={{
              uri: item.track.album.images[2].url,
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 10,
              marginRight: 10,
            }}
          />
          <View style={{width: '50%', height: '100%'}}>
            <Text
              numberOfLines={1}
              style={{
                color: 'whitesmoke',
                fontWeight: 'bold',
                width: '100%',
                fontSize: 30,
              }}>
              {item.track.album.name}
            </Text>
            <Text numberOfLines={1} style={{color: 'whitesmoke', fontSize: 16}}>
              {item.track.album.artists[0].name}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'whitesmoke',
            width: 40,
            height: 40,
            borderRadius: 100,
            marginRight: 13,
          }}>
          <FontAwesome
            name="play"
            size={25}
            color={'black'}
            style={{left: 3}}
          />
        </View>
      </View>
    </View>
  );
}
