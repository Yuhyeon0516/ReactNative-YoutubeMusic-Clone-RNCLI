import {View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import BestCategoryTitle from './BestCategoryTitle';
import {Items, getCategories} from '../../../hooks/useSpotify';
import BestCategoryItem from './BestCategoryItem';

export default function BestCategoryList() {
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
      <BestCategoryTitle />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {categories ? (
          categories.map((item, index) => {
            return (
              <View key={index} style={{marginRight: 20}}>
                <BestCategoryItem name={item.name} url={item.icons[0].url} />
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
