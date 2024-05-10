import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: {},
  bookmark: [],
};
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    setBookmarks: (state, action) => {
      state.bookmarks = action.payload;
    },
    setBookmark: (state, action) => {
      const bookID = state.bookmark.some(
        (item) => item.imdbID === action.payload,
      );
      if (bookID) {
        state.bookmark = state.bookmark.filter(item => item.imdbID !== action.payload);
        
      } else {
        state.bookmark.push(state.bookmarks);
      }
    },
  },
});
export const { setBookmarks, setBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;

export const getBookmark = (state) => state.bookmark.bookmark;
