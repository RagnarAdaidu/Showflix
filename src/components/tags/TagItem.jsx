import { useDispatch, useSelector } from "react-redux";
import { addId, fetchMoviesWithGenre } from "../../features/movies/moviesSlice";

export default function TagItem({ genre }) {
  const {genreId} = useSelector(store => store.movies)
  const dispatch = useDispatch()
  const { name, id } = genre;

  // console.log(genreId.includes(genre => genre === id))
  function handleClick(id){
    dispatch(addId(id))
    dispatch(fetchMoviesWithGenre())
  }
  return <li
    onClick={() => handleClick(id)}
    className={genreId.includes(id) ? 'highlighted' : 'not-highlighted'}
  >{name}</li>;
}
