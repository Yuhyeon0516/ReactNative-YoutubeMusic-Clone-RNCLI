import {
  Text,
  Animated,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {PLAY_LIST_FOOTER_BOTTOM} from '../../../utils/utils';

export default function PlayListFullBottom({
  playListAnim,
}: {
  playListAnim: Animated.Value;
}) {
  const {width, height} = useWindowDimensions();

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: width,
        height: playListAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 100],
        }),
        opacity: playListAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
        bottom: PLAY_LIST_FOOTER_BOTTOM,
        borderWidth: 1,
        backgroundColor: '#333',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }}>
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>다음 트랙</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>가사</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>관련 항목</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
