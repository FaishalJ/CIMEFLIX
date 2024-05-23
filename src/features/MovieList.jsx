import { Link } from "react-router-dom";
import { HiOutlineBookmark, HiMiniBookmark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MovieList.module.scss";
import Button from "../Ui/Button";
import { setShowSearching, setInput } from "../redux/SearchMovieSlice";
import { setBookmark, setBookmarks, getBookmark } from "../redux/BookmarkSlice";

export default function MovieList({ movie }) {
  const dispatch = useDispatch();
  const bookmark = useSelector(getBookmark);

  const { Poster, Title, imdbID } = movie;

  const booked = {
    Poster,
    Title,
    imdbID,
  };

  const isBookmarked = bookmark.some((item) => item.imdbID === imdbID);

  async function handleRequestDetails() {
    dispatch(setShowSearching(false));
    dispatch(setInput(""));
  }

  function handleSetBookmark() {
    dispatch(setBookmarks(booked));
    dispatch(setBookmark(imdbID));
    localStorage.setItem(
      "movies",
      JSON.stringify(dispatch(setBookmarks(booked)))
    );
  }
  if (Poster === "N/A") return;
  return (
    <li className={styles.movie}>
      <Link
        className={styles.movie_link}
        to={`/details/${imdbID}/${Title}`}
        onClick={handleRequestDetails}
      >
        <img src={Poster} alt={Title} />
        <p>{Title}</p>
      </Link>
      <Button type="abs" onClick={handleSetBookmark}>
        {isBookmarked ? <HiMiniBookmark /> : <HiOutlineBookmark />}
      </Button>
    </li>
  );
}
