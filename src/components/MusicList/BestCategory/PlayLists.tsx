import {
  View,
  Text,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PlayLists({
  playListsAnim,
}: {
  playListsAnim: Animated.Value;
}) {
  const {width} = useWindowDimensions();

  function onPressClose() {
    Animated.timing(playListsAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#1c1c1d',
        left: playListsAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1000, 0],
        }),
        opacity: playListsAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      }}>
      <SafeAreaView>
        <View
          style={{
            width: width,
            height: 50,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{padding: 10}} onPress={onPressClose}>
            <Ionicons name="arrow-back" size={30} color={'whitesmoke'} />
          </TouchableOpacity>
          <Text style={{color: 'whitesmoke', fontWeight: 'bold', fontSize: 22}}>
            Back
          </Text>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'red', height: 600}} />
        <View style={{backgroundColor: 'blue', height: 500}} />
      </ScrollView>
    </Animated.View>
  );
}
