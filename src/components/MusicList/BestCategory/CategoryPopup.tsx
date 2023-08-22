import {
  View,
  Text,
  SafeAreaView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CategoryPopup({
  categoryPopupAnim,
  setCategorySelected,
}: {
  categoryPopupAnim: Animated.Value;
  setCategorySelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {width} = useWindowDimensions();

  function onPressClose() {
    Animated.timing(categoryPopupAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setCategorySelected(false);
      }
    });
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#1c1c1d',
        paddingHorizontal: 20,
        top: categoryPopupAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1000, 0],
        }),
        // transform: [
        //   {
        //     translateY: categoryPopupAnim.interpolate({
        //       inputRange: [0, 1],
        //       outputRange: [500, 0],
        //     }),
        //   },
        // ],
      }}>
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            width: width,
            height: 50,
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginBottom: 10,
          }}>
          <TouchableOpacity style={{padding: 10}} onPress={onPressClose}>
            <Ionicons name="close" size={35} color={'whitesmoke'} />
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View
            style={{
              width: width * 0.7,
              height: width * 0.7,
              marginBottom: 20,
            }}>
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67706f0000000387237319bd466917030bc653',
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
              fontSize: 32,
              color: 'whitesmoke',
              marginBottom: 20,
              textShadowColor: '#eee999',
              textShadowOffset: {
                height: -2,
                width: 2,
              },
              textShadowRadius: 15,
            }}>
            Pop Rising Korea
          </Text>
          <Text style={{fontSize: 20, color: 'whitesmoke', marginBottom: 30}}>
            지금 국내에서 떠오르고 있는 팝 음악을 만나보세요! (커버: Reneé Rapp)
          </Text>
          <View style={{flexDirection: 'row', gap: 30, marginBottom: 40}}>
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
            style={{
              borderColor: 'whitesmoke',
              borderWidth: 0.5,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
            }}>
            <Text
              style={{fontSize: 14, color: 'whitesmoke', fontWeight: 'bold'}}>
              모두 재생
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}
