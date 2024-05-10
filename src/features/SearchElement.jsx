import styles from "./Movies.module.scss";
import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

import { getSearchMovie } from "../redux/SearchMovieSlice";

export default function SearchElement() {
  const movies = useSelector(getSearchMovie);
  return (
    <ul className={styles.movies_movies}>
      {movies.map(movie => (
        <MovieList key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
