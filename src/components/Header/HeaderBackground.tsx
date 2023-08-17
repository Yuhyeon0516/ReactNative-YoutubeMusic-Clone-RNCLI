import {Image, Animated} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type HeaderBackgroundPropsType = {
  selectedCategory: number | undefined;
  headerBackgroundAnim: Animated.Value;
};

export default function HeaderBackground({
  selectedCategory,
  headerBackgroundAnim,
}: HeaderBackgroundPropsType) {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 350,
        width: '100%',
        top: headerBackgroundAnim.interpolate({
          inputRange: [-1, 0, 100],
          outputRange: [0, 0, -100],
        }),
        opacity: headerBackgroundAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
        }),
      }}>
      {selectedCategory === undefined ? (
        <LinearGradient
          start={{x: 0.7, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.3, 0.6, 1]}
          colors={['#ffa10050', '#28bf4b30', '#22222290', '#111111']}
          style={{height: 350}}
        />
      ) : (
        <>
          <Image
            source={{uri: `https://picsum.photos/30${selectedCategory}`}}
            style={{width: '100%', height: 350, opacity: 0.4}}
          />
          <LinearGradient
            start={{x: 0.7, y: 0.1}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 1]}
            colors={['#11111100', '#111111']}
            style={{position: 'absolute', height: 350, width: '100%'}}
          />
        </>
      )}
    </Animated.View>
  );
}
