import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {setShowSearching, setInput, getIsLoading} from "../redux/SearchMovieSlice";

export default function SearchingList({result}) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const {Poster: image, Title, imdbID } = result;

  function handleClick() {
    dispatch(setShowSearching(false))
    dispatch(setInput(""))
  }
  return (
    <li onClick={handleClick}>
      {isLoading ? <p>Loading...</p> : 
      <Link to={`/details/${imdbID}/${Title}`}>
        <img src={image} alt={Title} />

        <span>{Title}</span>
      </Link>}
    </li>
  )
}