import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type FooterItemPropsType = {
  iconName: string;
  title: string;
};

export default function FooterItem({iconName, title}: FooterItemPropsType) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginVertical: 4}}>
        <Icon name={iconName} color={'white'} size={20} />
      </View>
      <Text style={{color: 'white', fontSize: 12}}>{title}</Text>
    </View>
  );
}
