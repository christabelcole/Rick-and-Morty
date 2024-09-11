// src/services/api.ts
const API_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async () => {
  const response = await fetch(`${API_URL}/character`);
  const data = await response.json();
  return data.results;
};

export const fetchLocations = async () => {
  const response = await fetch(`${API_URL}/location`);
  const data = await response.json();
  return data.results;
};

export const fetchEpisodes = async () => {
  const response = await fetch(`${API_URL}/episode`);
  const data = await response.json();
  return data.results;
};
