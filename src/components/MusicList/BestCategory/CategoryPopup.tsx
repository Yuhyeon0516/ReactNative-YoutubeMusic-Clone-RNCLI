/* eslint-disable react-native/no-inline-styles */
import {
  View,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryPopupItem from './CategoryPopupItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PlayLists} from '../../../hooks/useSpotify';

export default function CategoryPopup({
  categoryPopupAnim,
  setCategorySelected,
  categoryPlayLists,
  setCategoryPlayLists,
}: {
  categoryPopupAnim: Animated.Value;
  setCategorySelected: React.Dispatch<React.SetStateAction<boolean>>;
  categoryPlayLists: PlayLists | null;
  setCategoryPlayLists: React.Dispatch<React.SetStateAction<PlayLists | null>>;
}) {
  const {width} = useWindowDimensions();
  const xAnim = useRef(new Animated.Value(0)).current;
  const [currentPage, setCurrentPage] = useState(0);

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
          <View
            style={{
              flex: 1,
              // width: width * categoryPlayLists.playlists.items.length,
            }}>
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
                    return <CategoryPopupItem key={index} item={item} />;
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
            {/* {categoryPlayLists.playlists.items.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: width,
                    height: '100%',
                  }}>
                  {index ? (
                    <TouchableOpacity
                      onPress={() => onPressLeft(index)}
                      style={{
                        width: 50,
                        height: 50,
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <MaterialIcons
                        name="arrow-back-ios"
                        size={25}
                        color={'whitesmoke'}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View style={{width: 50, height: 50, padding: 5}} />
                  )}

                  <CategoryPopupItem item={item} />

                  {index !== categoryPlayLists.playlists.items.length - 1 ? (
                    <TouchableOpacity
                      onPress={() => onPressRight(index)}
                      style={{
                        width: 50,
                        height: 50,
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <MaterialIcons
                        name="arrow-forward-ios"
                        size={25}
                        color={'whitesmoke'}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View style={{width: 50, height: 50, padding: 5}} />
                  )}
                </View>
              );
            })} */}
          </View>
        )}
      </View>
    </Animated.View>
  );
}
