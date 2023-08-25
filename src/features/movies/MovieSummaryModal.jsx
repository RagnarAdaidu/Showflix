import { useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import Spinner from "../../ui/Spinner";
import {
  getPosterURL,
} from "../../utils/useHelperFunction";
import { useNavigate } from "react-router-dom";

export default function MovieSummaryModal() {
  const { movie, isLoading, error } = useSelector((store) => store.movies);
  const navigate = useNavigate()

  const {
    title,
    poster_path: poster,
    tagline,
  } = movie;

  return (
    <div className="summary-detail">
    {isLoading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <>
          <header>
            <img src={getPosterURL(poster)} alt={`Poster of ${movie} movie`} />
            <h2>{title}</h2>
            <p>{tagline} </p>
            <button className="movie-detail-button"
              onClick={() => navigate('/details')}
            >View Details</button>
          </header>
        </>
      )}
    </div>
  );
}
