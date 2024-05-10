import styles from "./Movies.module.scss";
import { useSelector } from 'react-redux';

import MovieList from "./MovieList";
import { getMovies } from "../redux/movieSlice";

export default function MovieElement() {
  const movies = useSelector(getMovies);
  
  return (
    <ul className={styles.movies_movies}>
      {movies.map(movie => (
        <MovieList key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}