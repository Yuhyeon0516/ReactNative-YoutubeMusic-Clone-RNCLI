import {Animated, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {BOTTOM_HEIGHT} from '../../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FooterItem from './FooterItem';

export default function Footer({playListAnim}: {playListAnim: Animated.Value}) {
  const safeAreaInset = useSafeAreaInsets();
  const {height} = useWindowDimensions();

  return (
    <Animated.View
      style={{
        marginBottom: playListAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [
            0,
            -BOTTOM_HEIGHT - safeAreaInset.bottom,
            -BOTTOM_HEIGHT - safeAreaInset.bottom,
          ],
        }),
      }}>
      <View
        style={{
          backgroundColor: '#222',
          paddingBottom: safeAreaInset.bottom,
        }}>
        <View style={{height: BOTTOM_HEIGHT}}>
          <View style={{flexDirection: 'row'}}>
            <FooterItem iconName="home-variant" title="홈" />
            <FooterItem iconName="compass-outline" title="둘러보기" />
            <FooterItem iconName="music-box-multiple-outline" title="보관함" />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}
