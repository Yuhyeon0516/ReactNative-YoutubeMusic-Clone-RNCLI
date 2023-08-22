/* eslint-disable react-native/no-inline-styles */
import {View, Text, Animated, useWindowDimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  PLAY_LIST_MIDDLE_BUTTONS_MARGIN_TOP,
  PLAY_LIST_MIDDLE_PADDING_BOTTOM,
  PLAY_LIST_MIDDLE_PADDING_TOP,
} from '../../../utils/utils';
import {faker} from '@faker-js/faker';

export default function PlayListFullMiddle({
  playListAnim,
}: {
  playListAnim: Animated.Value;
}) {
  const {height} = useWindowDimensions();

  return (
    <Animated.View
      style={{
        height: playListAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, 0, 250],
        }),
        opacity: playListAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
        width: playListAnim.interpolate({
          inputRange: [0, height / 2.5, height],
          outputRange: ['0%', '0%', '100%'],
        }),
      }}>
      <MiddleTitle />
      <MiddleTimeLine />
      <MiddleButtons />
    </Animated.View>
  );
}

function MiddleTitle() {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        paddingTop: PLAY_LIST_MIDDLE_PADDING_TOP,
        paddingBottom: PLAY_LIST_MIDDLE_PADDING_BOTTOM,
        flexDirection: 'row',
        marginRight: width * 0.1,
        justifyContent: 'space-between',
      }}>
      <Icon name="thumb-down-outline" color={'white'} size={20} />
      <View style={{alignItems: 'center', flex: 1, paddingHorizontal: 20}}>
        <Text
          numberOfLines={1}
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {faker.music.songName()}
        </Text>
        <Text style={{color: 'white', fontSize: 16}}>
          {faker.music.genre()}
        </Text>
      </View>
      <Icon name="thumb-up-outline" color={'white'} size={20} />
    </View>
  );
}

function MiddleTimeLine() {
  const {width} = useWindowDimensions();

  return (
    <View style={{marginRight: width * 0.1}}>
      <View style={{borderBottomWidth: 2, borderBottomColor: '#ffffff80'}} />
      <View
        style={{
          width: 10,
          height: 10,
          backgroundColor: 'white',
          marginTop: -6,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <Text style={{color: 'white', fontSize: 12}}>0:00</Text>
        <Text style={{color: 'white', fontSize: 12}}>3:42</Text>
      </View>
    </View>
  );
}

function MiddleButtons() {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: width * 0.1,
        marginTop: PLAY_LIST_MIDDLE_BUTTONS_MARGIN_TOP,
      }}>
      <Icon name="shuffle" size={24} color={'white'} />
      <Icon name="skip-previous" size={24} color={'white'} />
      <View
        style={{backgroundColor: '#ffffff20', padding: 10, borderRadius: 100}}>
        <Icon name="play" size={40} color={'white'} />
      </View>
      <Icon name="skip-next" size={24} color={'white'} />
      <Icon name="repeat" size={24} color={'white'} />
    </View>
  );
}
