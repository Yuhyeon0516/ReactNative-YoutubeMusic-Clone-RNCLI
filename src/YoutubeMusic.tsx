import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LogoHeader from './components/Header/LogoHeader';
import HeaderCategory from './components/Header/CategoryHeader';
import HeaderBackground from './components/Header/HeaderBackground';
import Footer from './components/Footer/Footer';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState<
    number | undefined
  >();

  return (
    <View style={{flex: 1}}>
      <HeaderBackground />
      <LogoHeader />
      <HeaderCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ScrollView style={{borderWidth: 1}}>
        <View style={{height: 10000}}>
          <Text>Music list</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
