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
            -BOTTOM_HEIGHT - safeAreaInset.bottom - 15,
            -BOTTOM_HEIGHT - safeAreaInset.bottom - 15,
          ],
        }),
      }}>
      <View
        style={{
          backgroundColor: '#222',
          paddingBottom: safeAreaInset.bottom,
          paddingTop: 10,
        }}>
        <View style={{height: BOTTOM_HEIGHT}}>
          <View style={{flexDirection: 'row'}}>
            <FooterItem iconName="home-filled" title="홈" />
            <FooterItem iconName="explore" title="둘러보기" />
            <FooterItem iconName="library-music" title="보관함" />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}
