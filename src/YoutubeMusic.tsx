import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LogoHeader from './components/Header/LogoHeader';
import HeaderCategory from './components/Header/CategoryHeader';
import HeaderBackground from './components/Header/HeaderBackground';
import Footer from './components/Footer/Footer';
import MusicListSmall from './components/MusicList/MusicListSmall/MusicListSmall';
import MusicListMedium from './components/MusicList/MusicListMedium/MusicListMedium';
import MusicListLarge from './components/MusicList/MusicListLarge/MusicListLarge';
import useYoutubeMusic from './hooks/useYoutubeMusic';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState<
    number | undefined
  >();

  const {onScrollBeginDrag, onScroll, onScrollEndDrag, headerAnim} =
    useYoutubeMusic();

  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <HeaderBackground selectedCategory={selectedCategory} />
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
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
