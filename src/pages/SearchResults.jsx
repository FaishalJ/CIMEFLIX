import styles from "./SearchResults.module.scss";
import { useSelector } from "react-redux";

import SearchElement from "../features/SearchElement";
import Spinner from "../Ui/Spinner";
import { getSearchMovie, getIsLoadingEvent, getErrorEvent } from "../redux/SearchMovieSlice";

export default function SearchResults() {
  const search = useSelector(getSearchMovie);
  const isLoading = useSelector(getIsLoadingEvent);
  const error = useSelector(getErrorEvent);
  return (
    <div className={styles.search}>
      {isLoading && <Spinner/>}
      {search.length === 0 && !error && <p>No movies to display, please search for your faverite movies 🎬🍿🎞</p>}
      {!error && search.length > 0 &&
        <>
          <h4 className="title-sec">search results:</h4>
          <SearchElement />
        </>
      }
      {error && <p>{error}</p>}
    </div>
  );
}
