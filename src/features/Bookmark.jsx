import styles from "./Bookmark.module.scss";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";
import {getBookmark} from "../redux/BookmarkSlice";

export default function Bookmark() {
  const bookmark = useSelector(getBookmark);

  return (
    <ul className={styles.bookmark_list}>
      {bookmark.length === 0 ? <p>Oops!! No book marks yet 📚, start by bookmarking your favorite movies</p> : bookmark.map(movie => (
        <MovieList key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}