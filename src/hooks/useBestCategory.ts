import {useState} from 'react';
import {PlayLists} from './useSpotify';

export function useBestCategory() {
  const [categorySelected, setCategorySelected] = useState(false);
  const [categoryPlayLists, setCategoryPlayLists] = useState<PlayLists | null>(
    null,
  );

  return {
    categorySelected,
    setCategorySelected,
    categoryPlayLists,
    setCategoryPlayLists,
  };
}
