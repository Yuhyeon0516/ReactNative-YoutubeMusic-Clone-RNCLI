import {ScrollView, View} from 'react-native';
import React from 'react';
import MusicListLargeTitle from './MusicListLargeTitle';
import MusicListLargeItem from './MusicListLargeItem';

function MusicListLarge() {
  return (
    <View>
      <MusicListLargeTitle />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {[...Array(10)].map((item, index) => {
          return (
            <View key={index} style={{marginRight: 20}}>
              <MusicListLargeItem />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default React.memo(MusicListLarge);
