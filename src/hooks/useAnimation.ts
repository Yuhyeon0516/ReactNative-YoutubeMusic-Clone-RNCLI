import {Animated} from 'react-native';

export default function useAnimation() {
  const categoryPopupAnim = new Animated.Value(0);

  return {
    categoryPopupAnim,
  };
}
