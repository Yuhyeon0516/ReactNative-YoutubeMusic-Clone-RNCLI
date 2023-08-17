import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';

type CategoryHeaderPropsType = {
  selectedCategory: number | undefined;
  setSelectedCategory: Dispatch<SetStateAction<number | undefined>>;
  headerAnim: Animated.Value;
};

export default function CategoryHeader({
  selectedCategory,
  setSelectedCategory,
  headerAnim,
}: CategoryHeaderPropsType) {
  const category = ['휴식', '에너지 충전', '집중', '운동', '출퇴근/등하교'];

  function onPressCategory(index: number) {
    const data = selectedCategory === index ? undefined : index;
    setSelectedCategory(data);
  }

  return (
    <View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: 'row',
          paddingVertical: 20,
          paddingBottom: 5,
          borderBottomWidth: headerAnim.interpolate({
            inputRange: [0, 40],
            outputRange: [0, 0.5],
          }),
          borderBottomColor: '#444',
        }}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {category.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onPressCategory(index)}>
              <View
                style={{
                  padding: 8,
                  paddingHorizontal: 16,
                  borderWidth: 0.5,
                  borderColor: '#ffffff30',
                  backgroundColor:
                    selectedCategory === index ? '#fff' : '#ffffff10',
                  marginHorizontal: 4,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: selectedCategory === index ? 'black' : 'white',
                  }}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}
