import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import MusicListCategoryTitle from './MusicListCategoryTitle';
import {Categories, Items, getCategories} from '../../../hooks/useSpotify';
import MusicListCategoryItem from './MusicListCategoryItem';

export default function MusicListCategory() {
  const [categories, setcategories] = useState<Items[] | null>(null);

  async function fetchCategories() {
    const categoriesResult = await getCategories();
    setcategories(categoriesResult);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View>
      <MusicListCategoryTitle />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {categories ? (
          categories.map((item, index) => {
            return (
              <View key={index} style={{marginRight: 20}}>
                <MusicListCategoryItem
                  name={item.name}
                  url={item.icons[0].url}
                />
              </View>
            );
          })
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </View>
  );
}
