import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

export default function MovieList() {
  const { movies: moviess, movie, isLoadingMovieList, error } = useSelector(store => store.movies)
  console.log(movie)

  return (
    <div className="movieList">
      {isLoadingMovieList && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {moviess.length === 0 && <ErrorMessage message={'There are no such movies'} />}
      {
        !isLoadingMovieList && !error &&
      <ul className="grid grid--4-cols container">
        {moviess.map((movie, id) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </ul>
      }
    </div>
  );
}