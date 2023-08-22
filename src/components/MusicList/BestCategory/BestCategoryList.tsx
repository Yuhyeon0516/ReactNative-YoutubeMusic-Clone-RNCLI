import {View, ScrollView, ActivityIndicator, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import BestCategoryTitle from './BestCategoryTitle';
import {Items, PlayLists, getCategories} from '../../../hooks/useSpotify';
import BestCategoryItem from './BestCategoryItem';

function BestCategoryList({
  categoryPopupAnim,
  setCategorySelected,
  setCategoryPlayLists,
}: {
  categoryPopupAnim: Animated.Value;
  setCategorySelected: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryPlayLists: React.Dispatch<React.SetStateAction<PlayLists | null>>;
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
                  item={item}
                  categoryPopupAnim={categoryPopupAnim}
                  setCategorySelected={setCategorySelected}
                  setCategoryPlayLists={setCategoryPlayLists}
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
