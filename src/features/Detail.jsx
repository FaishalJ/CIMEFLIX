import styles from "./Detail.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../Ui/Button";
import { requestDetails } from "../services/requestData";
import Spinner from "../Ui/Spinner";

export default function Detail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function requestData() {
      try {
        setLoading(true);
        const data = await requestDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    requestData();
  }, [movieId]);

  const {
    Poster,
    Title,
    Year,
    Actors,
    Country,
    Director,
    Genre,
    Language,
    Plot: description,
    Rated,
    Runtime: duration,
    Writer,
    imdbRating,
    Type,
    imdbID,
  } = movie;

  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        {loading && <Spinner/>}
        <div className={styles.detail_img_box}>
              <img src={Poster} alt={Title} />
            </div>

            <div className={styles.detail_descript}>
              <div className={styles.detail_descript_cont}>
                <div>
                  <h5>{Title}</h5>
                  <p className={styles.detail_descript_text}>{description}</p>
                </div>
                <Button>Stream in HD</Button>
              </div>

              <div className={styles.detail_descript_body}>
                <div className={styles.detail_descript_body_left}>
                  <p>
                    Genre:
                    <span className={styles.detail_descript_body_span}>
                      {Genre}
                    </span>
                  </p>
                  <p>
                    Actor:
                    <span className={styles.detail_descript_body_span}>
                      {Actors}
                    </span>
                  </p>
                  <p>
                    Director:
                    <span className={styles.detail_descript_body_span}>
                      {Director}
                    </span>
                  </p>
                  <p>
                    Country:
                    <span className={styles.detail_descript_body_span}>
                      {Country}
                    </span>
                  </p>
                  <p>
                    Writer:
                    <span className={styles.detail_descript_body_span}>
                      {Writer}
                    </span>
                  </p>
                </div>

                <div className={styles.detail_descript_body_right}>
                  <p>
                    ImdbRating:{" "}
                    <span className={styles.detail_descript_body_span}>
                      {imdbRating}
                    </span>
                  </p>
                  <p>
                    Language:<span>{Language}</span>
                  </p>
                  <p>
                    Duration:<span>{duration}</span>
                  </p>
                  <p>
                    Release:
                    <span className={styles.detail_descript_body_span}>
                      {Year}
                    </span>
                  </p>
                  <p>
                    rated: <span>{Rated}</span>
                  </p>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}
