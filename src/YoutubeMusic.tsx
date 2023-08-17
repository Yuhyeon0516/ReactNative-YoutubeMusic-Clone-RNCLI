import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderLogo from './components/HeaderLogo';
import HeaderCategory from './components/HeaderCategory';
import HeaderBackground from './components/HeaderBackground';
import Footer from './components/Footer';

export default function YoutubeMusic() {
  return (
    <View style={{flex: 1}}>
      <HeaderLogo />
      <HeaderCategory />
      <HeaderBackground />
      <ScrollView style={{borderWidth: 1}}>
        <View style={{height: 10000}}>
          <Text>Music list</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
