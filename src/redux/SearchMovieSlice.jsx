import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchMovie: [],
  searching: [],
  input: "",
  showSearching: false,
  isLoading: false,
  isLoadingEvent: false,
  error: "",
  errorEvent: "",
}
const searchMovieSlice = createSlice ({
  name: "searchMovie",
  initialState,
  reducers: {
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload
    },
    setSearching: (state, action) => {
      state.searching = action.payload
    },
    setInput: (state, action) => {
      state.input = action.payload
    },
    setShowSearching: (state, action) => {
      state.showSearching = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setIsLoadingEvent: (state, action) => {
      state.isLoadingEvent = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setErrorEvent: (state, action) => {
      state.errorEvent = action.payload
    },
  },
})
export const {setSearchMovie, setInput, setSearching,  setShowSearching, setIsLoading, setIsLoadingEvent, setError, setErrorEvent} = searchMovieSlice.actions;
export default searchMovieSlice.reducer;

export const getSearchMovie = (state) => state.searchMovie.searchMovie;
export const getSearching = (state) => state.searchMovie.searching;
export const getInput = (state) => state.searchMovie.input;
export const getShowSearching = (state) => state.searchMovie.showSearching;
export const getIsLoading = (state) => state.searchMovie.isLoading;
export const getIsLoadingEvent = (state) => state.searchMovie.isLoadingEvent;
export const getError = (state) => state.searchMovie.error;
export const getErrorEvent = (state) => state.searchMovie.errorEvent;