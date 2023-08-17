import {useRef} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export default function useYoutubeMusic() {
  const headerAnim = useRef(new Animated.Value(0)).current;
  const showHeaderRef = useRef(true);
  const scrollStartRef = useRef<number>(0);

  function onScrollBeginDrag(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const y = e.nativeEvent.contentOffset.y;
    scrollStartRef.current = y;
  }

  function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const y = e.nativeEvent.contentOffset.y;
    const dy = y - scrollStartRef.current;

    if (dy > 0 && showHeaderRef.current) {
      headerAnim.setValue(dy);
    }

    if (dy < 0 && !showHeaderRef.current) {
      headerAnim.setValue(40 + dy);
    }
  }

  function onScrollEndDrag(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const y = e.nativeEvent.contentOffset.y;
    const dy = y - scrollStartRef.current;

    if (dy > 0 && showHeaderRef.current) {
      Animated.spring(headerAnim, {
        toValue: 60,
        useNativeDriver: false,
      }).start();
      showHeaderRef.current = false;
    }
    if (dy < 0 && !showHeaderRef.current) {
      Animated.spring(headerAnim, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      showHeaderRef.current = true;
    }
  }

  return {
    onScrollBeginDrag,
    onScroll,
    onScrollEndDrag,
    headerAnim,
  };
}
