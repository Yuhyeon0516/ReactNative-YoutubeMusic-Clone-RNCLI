import {useRef} from 'react';
import {Animated} from 'react-native';

export default function useAnimation() {
  const categoryPopupAnim = useRef(new Animated.Value(0)).current;

  return {
    categoryPopupAnim,
  };
}
