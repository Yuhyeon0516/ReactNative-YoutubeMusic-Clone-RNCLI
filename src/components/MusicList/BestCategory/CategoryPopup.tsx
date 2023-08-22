/* eslint-disable react-native/no-inline-styles */
import {
  View,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  Pressable,
  PanResponder,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryPopupItem from './CategoryPopupItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PlayLists} from '../../../hooks/useSpotify';

interface CategoryPopupPropsType {
  categoryPopupAnim: Animated.Value;
  setCategorySelected: React.Dispatch<React.SetStateAction<boolean>>;
  categoryPlayLists: PlayLists | null;
  setCategoryPlayLists: React.Dispatch<React.SetStateAction<PlayLists | null>>;
  playListsAnim: Animated.Value;
}

export default function CategoryPopup({
  categoryPopupAnim,
  setCategorySelected,
  categoryPlayLists,
  setCategoryPlayLists,
  playListsAnim,
}: CategoryPopupPropsType) {
  const {width} = useWindowDimensions();
  const xAnim = useRef(new Animated.Value(0)).current;
  const [currentPage, setCurrentPage] = useState(0);

  const panRes = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const {dx} = gestureState;

      xAnim.setValue(currentPage * -(width - 100) + dx);
    },
    onPanResponderEnd: (event, gestureState) => {
      const {dx} = gestureState;

      if (currentPage === 0 && dx > 100) {
        Animated.timing(xAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else if (dx > 100) {
        onPressLeft();
      } else if (
        currentPage === categoryPlayLists!.playlists.items.length - 1 &&
        dx < -100
      ) {
        Animated.timing(xAnim, {
          toValue: currentPage * -(width - 100),
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else if (dx < -100) {
        onPressRight();
      } else {
        Animated.timing(xAnim, {
          toValue: currentPage * -(width - 100),
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  function onPressClose() {
    Animated.timing(categoryPopupAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setCategorySelected(false);
        setCategoryPlayLists(null);
        setCurrentPage(0);
        xAnim.setValue(0);
      }
    });
  }

  function onPressLeft() {
    Animated.timing(xAnim, {
      toValue: (currentPage - 1) * -(width - 100),
      duration: 400,
      useNativeDriver: false,
    }).start();

    setCurrentPage(prev => prev - 1);
  }

  function onPressRight() {
    Animated.timing(xAnim, {
      toValue: (currentPage + 1) * -(width - 100),
      duration: 400,
      useNativeDriver: false,
    }).start();

    setCurrentPage(prev => prev + 1);
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#1c1c1d',
        top: categoryPopupAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1000, 0],
        }),
      }}>
      <SafeAreaView>
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
      </SafeAreaView>

      <View style={{alignItems: 'center', flex: 1}}>
        {categoryPlayLists && (
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: '100%',
              }}>
              {currentPage !== 0 ? (
                <Pressable
                  onPress={onPressLeft}
                  style={{
                    width: 50,
                    height: '100%',
                    backgroundColor: '#1c1c1d',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                  }}>
                  <MaterialIcons
                    name="arrow-back-ios"
                    size={25}
                    color={'whitesmoke'}
                  />
                </Pressable>
              ) : (
                <View
                  style={{
                    width: 50,
                    height: '100%',
                    backgroundColor: '#1c1c1d',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                  }}
                />
              )}

              <Animated.View
                {...panRes.panHandlers}
                style={{
                  flexDirection: 'row',
                  width:
                    (width - 100) * categoryPlayLists.playlists.items.length,
                  height: '100%',
                  flexShrink: 4,
                  transform: [
                    {
                      translateX: xAnim,
                    },
                  ],
                }}>
                {categoryPlayLists &&
                  categoryPlayLists.playlists.items.map((item, index) => {
                    return (
                      <CategoryPopupItem
                        key={index}
                        item={item}
                        playListsAnim={playListsAnim}
                      />
                    );
                  })}
              </Animated.View>

              {currentPage !== categoryPlayLists.playlists.items.length - 1 ? (
                <Pressable
                  onPress={onPressRight}
                  style={{
                    width: 50,
                    height: '100%',
                    backgroundColor: '#1c1c1d',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                  }}>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={25}
                    color={'whitesmoke'}
                  />
                </Pressable>
              ) : (
                <View
                  style={{
                    width: 50,
                    height: '100%',
                    backgroundColor: '#1c1c1d',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                  }}
                />
              )}
            </View>
          </View>
        )}
      </View>
    </Animated.View>
  );
}
