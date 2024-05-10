import styles from "./Searching.module.scss";
import {useSelector} from "react-redux";

import SearchingList from "./SearchingList";
import {getSearching, getError} from "../redux/SearchMovieSlice";

export default function Searching() {
  const search = useSelector(getSearching);
  const error = useSelector(getError);
  return (
    <ul className={styles.search}>
      {!error && search?.map((item) => (
        <SearchingList key={item.imdbID} result={item}/>
      ))}
      {error && <p className="error">{error}</p>}
    </ul>
  );
}
