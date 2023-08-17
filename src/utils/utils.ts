import {Platform} from 'react-native';

export const BOTTOM_HEIGHT = 50;
export const PLAY_LIST_MARGIN_TOP = Platform.OS === 'android' ? -150 : -250;
export const PLAY_LIST_FOOTTER_BOTTOM = Platform.OS === 'android' ? 65 : 0;
