import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieSlice'
import searchMovieReducer from "./SearchMovieSlice";
import bookmarkReducer from "./BookmarkSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    searchMovie: searchMovieReducer,
    bookmark: bookmarkReducer,
  },
})