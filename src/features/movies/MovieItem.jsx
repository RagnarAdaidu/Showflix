import { useDispatch } from "react-redux"
import ViewDetails from "./ViewDetails"
import { getIMDBId, getMovieById } from "./moviesSlice"
import { convertDate, getPosterURL } from "../../utils/useHelperFunction"
import { useNavigate } from "react-router-dom"

export default function MovieItem({ movie }) {
  const { title, poster_path, release_date, id: movieId } = movie
  let new_release_date = convertDate(release_date)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // console.log(movieId)

  function handleClick(id){
    dispatch(getMovieById(id))
  }

  return <li className="movieItem">
    <img src={poster_path ? getPosterURL(poster_path) : 'replace.jpeg'} alt="" />
    <div className="mini"> 
      <p className="movie-title">
        {title}
      </p>
      <p className="movie-date">
        {new_release_date?.split(' ').reverse().join(' ') || '01 Jan 1900'}
      </p>
    </div>
    <div onClick={() => handleClick(movieId)} className="button">
    <ViewDetails />
    </div>
  </li>
}