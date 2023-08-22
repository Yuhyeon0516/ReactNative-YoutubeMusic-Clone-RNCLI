/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  Animated,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PlayListItems, Track, getTrack} from '../../../hooks/useSpotify';

interface CategoryPopupItemProps {
  item: PlayListItems;
  playListsAnim: Animated.Value;
  setTrackData: React.Dispatch<React.SetStateAction<Track | null>>;
}

export default function CategoryPopupItem({
  item,
  playListsAnim,
  setTrackData,
}: CategoryPopupItemProps) {
  const {width} = useWindowDimensions();

  async function fetchTrackData(href: string) {
    const track = await getTrack(href);

    setTrackData(track);
  }

  async function onPressCheckPlayList(href: string) {
    Animated.timing(playListsAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        fetchTrackData(href);
      }
    });
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: width - 100,
      }}>
      <View
        style={{
          width: width * 0.7,
          height: width * 0.7,
          marginBottom: 20,
        }}>
        <Image
          source={{
            uri: item.images[0].url,
          }}
          width={width * 0.7}
          height={width * 0.7}
          style={{
            borderRadius: 10,
          }}
        />
      </View>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 28,
          color: 'whitesmoke',
          marginBottom: 20,
          textShadowColor: '#eee999',
          textShadowOffset: {
            height: -2,
            width: 2,
          },
          textShadowRadius: 15,
        }}
        numberOfLines={1}>
        {item.name}
      </Text>

      <Text
        numberOfLines={2}
        style={{
          fontSize: 16,
          color: 'whitesmoke',
          marginBottom: 30,
          height: 50,
        }}>
        {item.description}
      </Text>

      <View style={{flexDirection: 'row', gap: 30, marginBottom: 30}}>
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 60,
            borderWidth: 1,
            borderColor: 'pink',
          }}>
          <FontAwesome name="heart" color={'pink'} size={30} />
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 60,
            borderWidth: 1,
            borderColor: '#1988ec',
          }}>
          <FontAwesome name="thumbs-up" color={'#1988ec'} size={30} />
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 60,
            borderWidth: 1,
            borderColor: 'whitesmoke',
          }}>
          <FontAwesome name="share-alt" color={'whitesmoke'} size={30} />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => onPressCheckPlayList(item.tracks.href)}
        style={{
          borderColor: 'whitesmoke',
          borderWidth: 0.5,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: 'whitesmoke',
            fontWeight: 'bold',
          }}>
          재생 목록 확인
        </Text>
      </TouchableOpacity>
    </View>
  );
}
