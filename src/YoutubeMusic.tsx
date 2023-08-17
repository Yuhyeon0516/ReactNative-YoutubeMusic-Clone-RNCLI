import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import LogoHeader from './components/Header/LogoHeader';
import HeaderCategory from './components/Header/CategoryHeader';
import HeaderBackground from './components/Header/HeaderBackground';
import Footer from './components/Footer/Footer';

export default function YoutubeMusic() {
  return (
    <View style={{flex: 1}}>
      <HeaderBackground />
      <LogoHeader />
      <HeaderCategory />

      <ScrollView style={{borderWidth: 1}}>
        <View style={{height: 10000}}>
          <Text>Music list</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
