import {Platform} from 'react-native';

export const BOTTOM_HEIGHT = 50;
export const PLAY_LIST_MARGIN_TOP = Platform.OS === 'android' ? -170 : -250;
export const PLAY_LIST_FOOTER_BOTTOM = Platform.OS === 'android' ? 0 : -10;
export const PLAY_LIST_IMAGE_SIZE = Platform.OS === 'android' ? '90%' : '100%';
export const PLAY_LIST_MIDDLE_PADDING_TOP = Platform.OS === 'android' ? -5 : 30;
export const PLAY_LIST_MIDDLE_PADDING_BOTTOM = 15;
export const PLAY_LIST_MIDDLE_BUTTONS_MARGIN_TOP =
  Platform.OS === 'android' ? 10 : 50;
