import { useSelector } from "react-redux";
import { HiOutlineClock, HiOutlineStar, HiOutlinePlay } from "react-icons/hi2";
import {
  getLanguages,
  getName,
  getPosterURL,
  useTimeHook,
} from "../../utils/useHelperFunction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

export default function MovieDetail() {
  const { movie, isLoading, error } = useSelector((store) => store.movies);
  const navigate = useNavigate();

  const {
    title,
    poster_path: poster,
    overview: plot,
    release_date: released,
    vote_average: rating,
    runtime,
    genres: genre,
    spoken_languages,
    homepage,
  } = movie;

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "Movie App";
        // console.log(`Clean up effect for movie ${title}`);
      };
    },
    [title]
  );

  const newRuntime = useTimeHook(Number(String(runtime)?.split(" ")[0]));

  return (
    <div className="center-movie-detail">
      <div className="movie-detail container-small">
        {isLoading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && (
          <>
            <img
              src={getPosterURL(poster)}
              alt={`${title} poster`}
              className="movie-detail-image"
            />
            <div className="movie-description">
              <h2 className="heading-tertiary2">{title}</h2>
              <p className="subheading3">{plot}</p>
              <p className="subheading3">Genres: {getName(genre)}</p>
              <p>Languages Spoken: {getLanguages(spoken_languages)}</p>

              <ul className="movie-detail-ul">
                <li>
                  <HiOutlineClock className="movie-detail-icon-dark" />
                  <span>{released}</span>
                </li>
                <li>
                  <HiOutlineStar className="movie-detail-icon-dark" />
                  <span>{rating}</span>
                </li>
                <li>
                  <HiOutlinePlay className="movie-detail-icon-dark" />
                  {newRuntime}
                </li>
              </ul>
              <p>
                For more information visit:{" "}
                <span className="blue">{homepage}</span>
              </p>
              <div className="movie-detail-footer">
                {/* <button
                  className="movie-detail-button"
                  onClick={() => navigate("/")}
                >
                  Back
                </button> */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
