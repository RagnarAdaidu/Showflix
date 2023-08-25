import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesWithGenre } from "./features/movies/moviesSlice";
import MovieDetail from "./features/movies/MovieDetail";

export default function App() {

  const { movies: moviess, genreId } = useSelector(store => store.movies)
  const dispatch = useDispatch()

  useEffect(function(){
    // dispatch(fetchMovies())
    dispatch(fetchMoviesWithGenre())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
