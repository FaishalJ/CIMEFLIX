import styles from "./FormSearch.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import requestData from "../services/requestData";
import {
  setSearchMovie,
  setSearching,
  setInput,
  getInput,
  setShowSearching,
  setIsLoading,
  setIsLoadingEvent,
  setError,
  setErrorEvent,
} from "../redux/SearchMovieSlice";

export default function FormSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const input = useSelector(getInput);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchData() {
        dispatch(setError(""));
        try {
          dispatch(setShowSearching(true));
          dispatch(setIsLoading(true));
          const data = await requestData(input);
          const { Search } = data;
          dispatch(setSearching(Search));
        } catch (error) {
          dispatch(setError(error.message));
        } finally {
          dispatch(setIsLoading(false));
        }
      }
      input.length >= 3 && fetchData();
      
      return function() {
        controller.abort();
      }
    },
    [input],
  );

  async function handleSubmit(e) {
    try {
    dispatch(setErrorEvent(""));
    e.preventDefault();
    dispatch(setIsLoadingEvent(true));
    const { Search } = await requestData(input);
    dispatch(setSearchMovie(Search));
    navigate("/search");
    dispatch(setInput(""));
    dispatch(setShowSearching(false));
    } catch (error) {
      console.log(error);
      dispatch(setErrorEvent(error.message));
    } finally {
      dispatch(setIsLoadingEvent(false));
    }
  }

  return (
    <form className={styles.form_search} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => dispatch(setInput(e.target.value))}
      />
      <HiMagnifyingGlass onClick={handleSubmit} />
    </form>
  );
}
