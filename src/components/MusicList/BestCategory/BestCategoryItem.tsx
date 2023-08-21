import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ItemProps {
  name: string;
  url: string;
}

export default function BestCategoryItem({name, url}: ItemProps) {
  const {width} = useWindowDimensions();
  return (
    <View>
      <Image
        source={{
          uri: url,
        }}
        style={{width: width / 2.5, height: width / 2.5, borderRadius: 4}}
      />
      <View
        style={{
          width: width / 2.5,
          height: width / 2.5,
          position: 'absolute',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: width / 2.5 / 6.5 + 10,
            height: width / 2.5 / 6.5 + 10,
            position: 'absolute',
            left: 7,
            top: 7,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <Icon name="play" size={width / 2.5 / 6.5} color={'black'} />
        </View>
      </View>
      <Text
        style={{
          color: 'white',
          marginTop: 5,
          width: width / 2.5,
          fontSize: 14,
          height: 30,
        }}
        numberOfLines={2}>
        {name}
      </Text>
    </View>
  );
}
