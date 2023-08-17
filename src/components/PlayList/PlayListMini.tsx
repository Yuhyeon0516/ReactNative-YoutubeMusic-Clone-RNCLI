import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {faker} from '@faker-js/faker';

export default function PlayListMini() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{marginLeft: 14, width: '60%'}}>
        <Text style={{color: 'white'}} numberOfLines={1}>
          {faker.music.songName()}
        </Text>
        <Text style={{color: '#999'}}>{faker.music.genre()}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="play" size={24} color={'white'} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="skip-next" size={24} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
