import {View, Text, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PlayListsItem() {
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
              width: 30,
              height: 30,
              marginHorizontal: 5,
            }}>
            1
          </Text>
          <Image
            source={{
              uri: 'https://i.scdn.co/image/ab67616d00001e02bf5cce5a0e1ed03a626bdd74',
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
              Seven (feat. Latto)
            </Text>
            <Text numberOfLines={1} style={{color: 'whitesmoke', fontSize: 16}}>
              Jung Kook
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
