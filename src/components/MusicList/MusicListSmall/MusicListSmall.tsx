import {ScrollView, View, useWindowDimensions} from 'react-native';
import React, {useRef} from 'react';
import MusicListSmallItem from './MusicListSmallItem';
import MusicListSmallTitle from './MusicListSmallTitle';

function MusicListSmall() {
  const {width} = useWindowDimensions();
  const scrollStartRef = useRef(0);
  const pageRef = useRef(1);
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View>
      <MusicListSmallTitle />
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
        scrollEventThrottle={1}
        onScrollBeginDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          scrollStartRef.current = x;
        }}
        onScrollEndDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          const dx = x - scrollStartRef.current;

          if (width / 3 < dx && pageRef.current !== 3) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * pageRef.current,
              animated: true,
            });
            pageRef.current = pageRef.current + 1;
          }
          if (dx > 0 && dx < width / 3) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
          }

          if (-width / 3 > dx) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 2),
              animated: true,
            });
            pageRef.current = pageRef.current - 1;
          }
          if (dx < 0 && dx > -width / 3) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
          }
        }}>
        {[...Array(3)].map((item, index) => {
          return (
            <View key={index} style={{width: width * 0.93}}>
              {[...Array(4)].map((item, index) => {
                return <MusicListSmallItem key={index} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default React.memo(MusicListSmall);
