import styles from "./Movies.module.scss";

import MovieElement from "../features/MovieElement";

export default function Movies() {
  return (
    <div className={styles.movies}>
      <h3 className="title-sec">Suggestion</h3>
      <MovieElement/>
    </div>
  );
}