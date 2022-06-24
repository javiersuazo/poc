export function updateSongs(state, payload) {
  return {
    ...state,
    songs: payload.songs
  };
}

export function updateArtists(state, payload) {
  return {
    ...state,
    artists: payload.artists
  };
}

export function updateSelectedSong(state, payload) {
}
