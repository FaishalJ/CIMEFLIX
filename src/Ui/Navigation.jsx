import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


import Logo from "./Logo";
import FormSearch from "../features/FormSearch";
import Searching from "../features/Searching";
import {getShowSearching, getSearchMovie, getInput} from "../redux/SearchMovieSlice";
import {getBookmark} from "../redux/BookmarkSlice";


export default function Navigation() {
  const search = useSelector(getSearchMovie);
  const showSearching = useSelector(getShowSearching);
  const input = useSelector(getInput);
  const bookmark = useSelector(getBookmark);
  const {Title, imdbID} =  bookmark[0] ? bookmark[0] : {};
  
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_center}>
        <div className={styles.nav_nav}>
          <Logo />
          <ul className={styles.nav_links}>
            <li>
              <NavLink to="/" className={styles.nav_link}>
                Home
              </NavLink>
            </li>
            {search.length > 0 && (<li>
              <NavLink to="/search" className={styles.nav_link}>
                Search
              </NavLink>
            </li>)}
            {bookmark.length > 0 && <li>
              <NavLink to={`details/${imdbID}/${Title}/bookmark`} className={styles.nav_link}>
                Bookmarks
              </NavLink>
            </li>}
          </ul>
        </div>
        <FormSearch />
      </div>
      {(showSearching === true && input !== "") && <Searching />}
    </nav>
  );
}
