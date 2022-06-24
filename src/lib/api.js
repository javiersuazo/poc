import {
  SONGS_DATA,
  MAIN_ARTIST_DATA
} from 'lib/constants';

import {
  findItemById,
  findItemsByIds
} from 'lib/helpers';

export const getSongs = async() => {
  const response = await mockAPICall(SONGS_DATA);
  return response;
}

export const getSong = async(id) => {
  const response = await mockAPICall(findItemById(SONGS_DATA, id));
  return response;
}

export const getArtistsByIds = async(ids) => {
  const response = await mockAPICall(findItemsByIds(MAIN_ARTIST_DATA, ids));
  return response;
}

const mockAPICall = async(data) => {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(data), getRandonNumber())
  });
};

// Returns randon number between 1 and 5000
const getRandonNumber = () => Math.floor(Math.random() * (5000 - 1) + 1);
