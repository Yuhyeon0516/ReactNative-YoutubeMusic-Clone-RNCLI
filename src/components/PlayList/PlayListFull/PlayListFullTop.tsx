import React from 'react';
import {View, Text, Animated, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PlaylistFullTop({
  playListAnim,
}: {
  playListAnim: Animated.Value;
}) {
  const {width, height} = useWindowDimensions();

  return (
    <Animated.View
      style={{
        height: playListAnim.interpolate({
          inputRange: [0, height / 2.5, height],
          outputRange: [0, 0, 100],
        }),
        opacity: playListAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
      }}>
      <Animated.View
        style={{
          width: playListAnim.interpolate({
            inputRange: [0, height / 2.5, height],
            outputRange: [0, 0, width],
          }),
          marginLeft: -width * 0.1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <IconItem name="chevron-down" />
          <View style={{height: 40, width: 40}} />
        </View>
        <View
          style={{
            backgroundColor: '#111',
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <View
            style={{
              backgroundColor: '#333',
              height: 30,
              paddingHorizontal: 12,
              justifyContent: 'center',
              borderRadius: 100,
            }}>
            <Text style={{color: '#ffffff90', fontSize: 12}}>노래</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: '#ffffff80', fontSize: 12}}>동영상</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <IconItem name="cast" />
          <IconItem name="dots-vertical" />
        </View>
      </Animated.View>
    </Animated.View>
  );
}

function IconItem({name}: {name: string}) {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={name} size={24} color="white" />
    </View>
  );
}
