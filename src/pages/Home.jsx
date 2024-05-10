import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import requestData from "../services/requestData";
import Banner from "../features/Banner";
import Movies from "../features/Movies";
import { setMovies } from "../redux/movieSlice";
import { generateMovie } from "../services/helper";

export default function Home() {
  const { Search } = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(Search));
  }, []);

  return (
    <>
      <Banner />
      <Movies />
    </>
  );
}

// Loader
export async function loader() {
  const { Search } = await requestData(generateMovie());
  return { Search };
}
