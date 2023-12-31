/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LogoHeader from './components/Header/LogoHeader';
import HeaderCategory from './components/Header/CategoryHeader';
import HeaderBackground from './components/Header/HeaderBackground';
import Footer from './components/Footer/Footer';
import MusicListSmall from './components/MusicList/MusicListSmall/MusicListSmall';
import MusicListMedium from './components/MusicList/MusicListMedium/MusicListMedium';
import MusicListLarge from './components/MusicList/MusicListLarge/MusicListLarge';
import useYoutubeMusic from './hooks/useYoutubeMusic';
import PlayList from './components/PlayList/PlayList';
import {useBestCategory} from './hooks/useBestCategory';
import useAnimation from './hooks/useAnimation';
import BestCategoryList from './components/MusicList/BestCategory/BestCategoryList';
import CategoryPopup from './components/MusicList/BestCategory/CategoryPopup';
import PlayLists from './components/MusicList/BestCategory/PlayLists';
import {Track} from './hooks/useSpotify';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState<
    number | undefined
  >();
  const [timer, setTimer] = useState(0);

  const {
    onScrollBeginDrag,
    onScroll,
    onScrollEndDrag,
    headerAnim,
    headerBackgroundAnim,
  } = useYoutubeMusic();

  const playListAnim = useRef(new Animated.Value(0)).current;
  const {categoryPopupAnim, playListsAnim} = useAnimation();
  const {setCategorySelected, categoryPlayLists, setCategoryPlayLists} =
    useBestCategory();

  const [trackData, setTrackData] = useState<Track | null>(null);

  useEffect(() => {
    setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <HeaderBackground
        selectedCategory={selectedCategory}
        headerBackgroundAnim={headerBackgroundAnim}
      />
      <LogoHeader headerAnim={headerAnim} />
      <HeaderCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        headerAnim={headerAnim}
      />
      <ScrollView
        scrollEventThrottle={1}
        onScrollBeginDrag={onScrollBeginDrag}
        onScroll={onScroll}
        onScrollEndDrag={onScrollEndDrag}>
        <View style={{marginBottom: 100}}>
          <BestCategoryList
            categoryPopupAnim={categoryPopupAnim}
            setCategorySelected={setCategorySelected}
            setCategoryPlayLists={setCategoryPlayLists}
          />
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
        </View>
      </ScrollView>
      <PlayList playListAnim={playListAnim} />
      <Footer playListAnim={playListAnim} timer={timer} />

      <CategoryPopup
        categoryPopupAnim={categoryPopupAnim}
        setCategorySelected={setCategorySelected}
        categoryPlayLists={categoryPlayLists}
        setCategoryPlayLists={setCategoryPlayLists}
        playListsAnim={playListsAnim}
        setTrackData={setTrackData}
      />

      <PlayLists
        playListsAnim={playListsAnim}
        trackData={trackData}
        setTrackData={setTrackData}
      />
    </View>
  );
}
