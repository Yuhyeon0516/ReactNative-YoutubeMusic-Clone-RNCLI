import {ScrollView, View, useWindowDimensions} from 'react-native';
import React from 'react';
import MusicListSmallItem from './MusicListSmallItem';
import MusicListSmallTitle from './MusicListSmallTitle';

function MusicListSmall() {
  const {width} = useWindowDimensions();

  return (
    <View>
      <MusicListSmallTitle />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {[...Array(3)].map((item, index) => {
          return (
            <View key={index} style={{width: width * 0.93}}>
              {[...Array(4)].map((item, index) => {
                return <MusicListSmallItem key={index} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default React.memo(MusicListSmall);
