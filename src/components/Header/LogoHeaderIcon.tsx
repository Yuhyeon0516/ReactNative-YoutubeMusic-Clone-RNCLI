import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type LogoHeaderIconPropsType = {
  iconName: string;
  style?: StyleProp<ViewStyle>;
};

export default function LogoHeaderIcon({
  iconName,
  style,
}: LogoHeaderIconPropsType) {
  return (
    <TouchableOpacity>
      <View
        style={[
          {
            height: 45,
            width: 45,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        <Icon name={iconName} size={24} color={'white'} />
      </View>
    </TouchableOpacity>
  );
}
