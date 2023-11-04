export const API_ENDPOINTS = {
  CHARACTER: 'https://rickandmortyapi.com/api/character/[characterId]',
  CHARACTERS: 'https://rickandmortyapi.com/api/character',
  EPISODE: 'https://rickandmortyapi.com/api/episode/[episodeId]',
  EPISODE_RATING:
    'https://api.themoviedb.org/3/tv/60625/season/[seasonId]/episode/[episodeId]',
  EPISODES: 'https://rickandmortyapi.com/api/episode',
  LOCATION: 'https://rickandmortyapi.com/api/location/[locationId]',
  LOCATIONS: 'https://rickandmortyapi.com/api/location'
};

export const CHARACTER_PANELS = ['leftPanel', 'rightPanel'];

export const CHARACTER_STATUSES = {
  ALIVE: 'Alive',
  DEAD: 'Dead',
  UNKNOWN: 'unknown'
};
