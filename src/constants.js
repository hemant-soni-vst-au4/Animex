const CORS_HANDLER = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = `${CORS_HANDLER}https://api.jikan.moe/v3/`;

export const ANIME_LIST_URL = `${BASE_URL}top/anime/`;
export const SEARCH_URL = `${BASE_URL}search/anime?`;
export const ANIME_DETAILS_URL = `${BASE_URL}anime/`;

export const ADD_ANIME_LIST = 'ADD_ANIME_LIST';
export const ADD_ANIME_DETAILS = 'ADD_ANIME_DETAILS';
