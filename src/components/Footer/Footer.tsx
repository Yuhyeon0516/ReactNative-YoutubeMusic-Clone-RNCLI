import {View} from 'react-native';
import React from 'react';
import {BOTTOM_HEIGHT} from '../../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FooterItem from './FooterItem';

export default function Footer() {
  const safeAreaInset = useSafeAreaInsets();

  return (
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
  );
}
