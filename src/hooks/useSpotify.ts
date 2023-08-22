import axios from 'axios';
import {CLIENT_ID, CLIENT_SECRET} from '@env';

interface TokenList {
  access_token: string;
  expires_in: number;
  token_type: string;
}

async function getToken(): Promise<TokenList> {
  const tokenList: TokenList = await axios
    .post(
      'https://accounts.spotify.com/api/token',
      {
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    .then(result => result.data);

  return tokenList;
}

interface Icons {
  height: number;
  url: string;
  width: number;
}

export interface Items {
  href: string;
  icons: Icons[];
  id: string;
  name: string;
}

interface Categories {
  categories: {
    href: string;
    items: Items[];
  };
}

export async function getCategories(): Promise<Items[]> {
  const {access_token, token_type} = await getToken();

  const categories: Categories = await axios
    .get('https://api.spotify.com/v1/browse/categories', {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    })
    .then(result => result.data);

  return categories.categories.items;
}

export interface PlayListItems {
  description: string;
  images: {
    height: number | null;
    url: string;
    width: number | null;
  }[];
  name: string;
  tracks: {
    href: string;
  };
}

export interface PlayLists {
  playlists: {
    items: PlayListItems[];
  };
}

export async function getCategoryPlayLists(href: string): Promise<PlayLists> {
  const {access_token, token_type} = await getToken();

  const playLists: PlayLists = await axios
    .get(`${href}/playlists`, {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    })
    .then(result => result.data);

  return playLists;
}
