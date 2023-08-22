/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Animated,
  PanResponder,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import PlayListMini from './PlayListMini';
import PlayListFullTop from './PlayListFull/PlayListFullTop';
import {PLAY_LIST_IMAGE_SIZE, PLAY_LIST_MARGIN_TOP} from '../../utils/utils';
import PlayListFullBottom from './PlayListFull/PlayListFullBottom';
import PlayListFullMiddle from './PlayListFull/PlayListFullMiddle';

function PlayList({playListAnim}: {playListAnim: Animated.Value}) {
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
        Animated.timing(playListAnim, {
          toValue: height,
          duration: 200,
          useNativeDriver: false,
        }).start();
        playListRef.current = 'full';
      }
      if (dy < 0 && dy > -100 && playListRef.current === 'mini') {
        Animated.timing(playListAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }

      if (dy > 100 && playListRef.current === 'full') {
        Animated.timing(playListAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
        playListRef.current = 'mini';
      }

      if (dy > 0 && dy < 100 && playListRef.current === 'full') {
        Animated.timing(playListAnim, {
          toValue: height,
          duration: 200,
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
          outputRange: [0, PLAY_LIST_MARGIN_TOP, PLAY_LIST_MARGIN_TOP],
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
      <View>
        <PlayListFullTop playListAnim={playListAnim} />
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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: 'https://picsum.photos/id/240/300'}}
            style={{width: PLAY_LIST_IMAGE_SIZE, height: PLAY_LIST_IMAGE_SIZE}}
          />
        </Animated.View>
        <PlayListFullMiddle playListAnim={playListAnim} />
      </View>

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
      <PlayListFullBottom playListAnim={playListAnim} />
    </Animated.View>
  );
}

export default React.memo(PlayList);
