import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const END_POINTS = {
  events: '/events',
  recipes: '/recipes',
  areas: '/areas',
  categories: '/categories',
  ingredients: '/ingredients',
  popular: '/recipes/popular',
};

axios.defaults.baseURL = BASE_URL;

export const getImages = async () => {
  const response = await axios(`${END_POINTS.events}`);
  return response.data;
};
