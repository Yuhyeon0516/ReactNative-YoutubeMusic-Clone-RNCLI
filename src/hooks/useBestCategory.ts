import {useState} from 'react';

export function useBestCategory() {
  const [categorySelected, setCategorySelected] = useState(false);

  return {
    categorySelected,
    setCategorySelected,
  };
}
