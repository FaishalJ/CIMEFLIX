import styles from "./RelatedMovies.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import MovieList from "../features/MovieList";
import requestData from "../services/requestData";

export default function RelatedMovies() {
  const [relatedMovies, setRelatedMovies] = useState([]);
  const { title } = useParams();
  
  useEffect(function() {
    async function requestMovie() {
      try {
        const {Search} = await requestData(title);
        setRelatedMovies(Search);
      } catch (error) {
        console.log(error);
      }
    }
    requestMovie()
  }, [title])
  
  return (
    <ul className={styles.related_movies}>
      {relatedMovies.map(movie => (
        <MovieList key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
