/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlayListsItem from './PlayListsItem';
import {Track} from '../../../hooks/useSpotify';

export default function PlayLists({
  playListsAnim,
  trackData,
  setTrackData,
}: {
  playListsAnim: Animated.Value;
  trackData: Track | null;
  setTrackData: React.Dispatch<React.SetStateAction<Track | null>>;
}) {
  const {width} = useWindowDimensions();

  function onPressClose() {
    Animated.timing(playListsAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setTrackData(null);
      }
    });
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

      {trackData ? (
        <ScrollView>
          {trackData.items.map((item, index) => {
            return (
              <View key={index}>
                <PlayListsItem item={item} index={index} />
                <View
                  style={{
                    alignSelf: 'center',
                    width: '90%',
                    height: 1,
                    borderWidth: 1,
                    borderColor: '#f2f2f230',
                    marginVertical: 5,
                  }}
                />
              </View>
            );
          })}
          <View style={{width: '100%', height: 50}} />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'whitesmoke'} />
        </View>
      )}
    </Animated.View>
  );
}
