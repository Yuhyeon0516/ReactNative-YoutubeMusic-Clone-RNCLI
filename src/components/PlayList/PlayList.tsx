import {Image, Animated, PanResponder, useWindowDimensions} from 'react-native';
import React, {useRef} from 'react';
import PlayListMini from './PlayListMini';
import ImageComponent from './ImageComponent';

export default function PlayList({
  playListAnim,
}: {
  playListAnim: Animated.Value;
}) {
  const playListRef = useRef('mini');
  const {width, height} = useWindowDimensions();
  const panRes = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const {dy} = gestureState;
      if (playListRef.current === 'mini') {
        playListAnim.setValue(-dy);
      }

      if (playListRef.current === 'full') {
        playListAnim.setValue(height - dy);
      }
    },
    onPanResponderEnd: (event, gestureState) => {
      const {dy} = gestureState;

      if (dy < -100 && playListRef.current === 'mini') {
        Animated.spring(playListAnim, {
          toValue: height + 10,
          useNativeDriver: false,
        }).start();
        playListRef.current = 'full';
      }
      if (dy < 0 && dy > -100 && playListRef.current === 'mini') {
        Animated.spring(playListAnim, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }

      if (dy > 100 && playListRef.current === 'full') {
        Animated.spring(playListAnim, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
        playListRef.current = 'mini';
      }

      if (dy > 0 && dy < 100 && playListRef.current === 'full') {
        Animated.spring(playListAnim, {
          toValue: height + 10,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <Animated.View
      {...panRes.panHandlers}
      style={{
        backgroundColor: '#222',
        borderBottomColor: '#666',
        borderBottomWidth: 1,
        marginTop: playListAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, -200, -200],
        }),
        height: playListAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [60, 160],
        }),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: playListAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [10, width * 0.1, width * 0.1],
        }),
      }}>
      <Animated.View
        style={{
          width: playListAnim.interpolate({
            inputRange: [0, height / 2, height],
            outputRange: [50, width * 0.8, width * 0.8],
          }),
          height: playListAnim.interpolate({
            inputRange: [0, height / 2, height],
            outputRange: [50, width * 0.8, width * 0.8],
          }),
        }}>
        <Image
          source={{uri: 'https://picsum.photos/id/240/300'}}
          style={{width: '100%', height: '100%'}}
        />
      </Animated.View>
      {/* <PlayListFull /> */}
      <Animated.View
        style={{
          flex: 1,
          opacity: playListAnim.interpolate({
            inputRange: [0, height / 2],
            outputRange: [1, 0],
          }),
        }}>
        <PlayListMini />
      </Animated.View>
    </Animated.View>
  );
}
