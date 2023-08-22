import {
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React from 'react';
import {
  Items,
  PlayLists,
  getCategoryPlayLists,
} from '../../../hooks/useSpotify';

interface ItemProps {
  item: Items;
  categoryPopupAnim: Animated.Value;
  setCategorySelected: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryPlayLists: React.Dispatch<React.SetStateAction<PlayLists | null>>;
}

export default function BestCategoryItem({
  item,
  categoryPopupAnim,
  setCategorySelected,
  setCategoryPlayLists,
}: ItemProps) {
  const {width} = useWindowDimensions();

  async function onPressItem(href: string) {
    setCategorySelected(true);

    const categoryPlayLists = await getCategoryPlayLists(href);
    setCategoryPlayLists(categoryPlayLists);

    Animated.timing(categoryPopupAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  return (
    <TouchableOpacity onPress={() => onPressItem(item.href)}>
      <Image
        source={{
          uri: item.icons[0].url,
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
        numberOfLines={2}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
