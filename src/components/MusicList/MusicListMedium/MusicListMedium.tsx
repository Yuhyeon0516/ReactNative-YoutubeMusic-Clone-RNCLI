import {ScrollView, View} from 'react-native';
import React from 'react';
import MusicListMediumTitle from './MusicListMediumTitle';
import MusicListMediumItem from './MusicListMediumItem';

function MusicListMedium() {
  return (
    <View>
      <MusicListMediumTitle />
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 10}}>
        {[...Array(7)].map((item, index) => {
          return (
            <View key={index} style={{marginRight: 20}}>
              <MusicListMediumItem />
              <MusicListMediumItem />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default React.memo(MusicListMedium);
