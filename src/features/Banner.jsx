import styles from "./Banner.module.scss";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";

import Badge from "../Ui/Badge";
import Button from "../Ui/Button";
import { setShowSearching } from "../redux/SearchMovieSlice";
import { generateMovie } from "../services/helper";

export default function Banner() {
  const dispatch = useDispatch();
  const { Search } = useLoaderData();
  console.log(Search);
  const banner = generateMovie(Search);

  return (
    <div
      className={styles.banner}
      onClick={() => dispatch(setShowSearching(false))}
    >
      <div className={styles.banner_img}>
        <img src={banner.Poster} alt={banner.Title} />
      </div>
      <div className={styles.banner_content}>
        <h3>{banner.Title}</h3>
        <p>
          Quality: <Badge>HD</Badge>
        </p>
        <p>Type: {banner.Type}</p>
        <p>Year: {banner.Year}</p>
        <Button>Watch Now</Button>
      </div>
    </div>
  );
}
