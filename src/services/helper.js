const API_KEY = 'dfc462fb';
export const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const arr = ['avengers', 'batman', 'spiderman', 'war', 'wonder', 'milk', 'x-men', 'any', 'inc', "min", "blood", "fist", "cold", "dream", "ket"]
export function generateMovie(mov=arr) {
  const random = Math.floor(Math.random() * mov.length);
  const movie = mov[random];
  return movie;
}