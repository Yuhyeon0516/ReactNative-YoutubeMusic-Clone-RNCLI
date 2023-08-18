import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';

interface ItemProps {
  name: string;
  url: string;
}

export default function MusicListCategoryItem({name, url}: ItemProps) {
  const {width} = useWindowDimensions();
  return (
    <View>
      <Image
        source={{
          uri: url,
        }}
        style={{width: width / 2.5, height: width / 2.5, borderRadius: 4}}
      />
      <Text
        style={{
          color: 'white',
          marginTop: 5,
          width: width / 2.5,
          fontSize: 14,
          height: 30,
        }}
        numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}
