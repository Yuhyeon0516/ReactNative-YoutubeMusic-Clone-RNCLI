import {View, ScrollView, ActivityIndicator, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import BestCategoryTitle from './BestCategoryTitle';
import {Items, getCategories} from '../../../hooks/useSpotify';
import BestCategoryItem from './BestCategoryItem';

function BestCategoryList({
  categoryPopupAnim,
  setCategorySelected,
}: {
  categoryPopupAnim: Animated.Value;
  setCategorySelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
                <BestCategoryItem
                  name={item.name}
                  url={item.icons[0].url}
                  categoryPopupAnim={categoryPopupAnim}
                  setCategorySelected={setCategorySelected}
                />
              </View>
            );
          })
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default React.memo(BestCategoryList);
