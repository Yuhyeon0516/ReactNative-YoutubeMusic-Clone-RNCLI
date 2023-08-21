import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ItemProps {
  name: string;
  url: string;
  categoryPopupAnim: Animated.Value;
  setCategorySelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BestCategoryItem({
  name,
  url,
  categoryPopupAnim,
  setCategorySelected,
}: ItemProps) {
  const {width} = useWindowDimensions();

  function onPressItem() {
    setCategorySelected(true);
    Animated.timing(categoryPopupAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }

  const ucOnPressItem = useCallback(onPressItem, [
    categoryPopupAnim,
    setCategorySelected,
  ]);

  return (
    <TouchableOpacity onPress={ucOnPressItem}>
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
    </TouchableOpacity>
  );
}
