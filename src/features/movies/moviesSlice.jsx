import { options, tmdb_url } from "../../api";

const initialState = {
  movies: [],
  movie: {},
  genreId: [],
  imdbId: "",
  isLoadingMovieList: false,
  isLoading: false,
  error: "",
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "fetch/movies":
      return {
        ...state,
        movies: action.payload,
        isLoadingMovieList: false,
        error: "",
      };
    case "get/movie":
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
        error: "",
      };
    case "get/imdbId":
      return {
        ...state,
        imdbId: action.payload,
        isLoading: false,
        error: ''
      };
    case "add/id":
      let filteredId;
      if (!state.genreId.includes(action.payload)) {
        filteredId = [...state.genreId, action.payload];
      } else {
        filteredId = state.genreId.filter((id) => id !== action.payload);
      }
      return {
        ...state,
        genreId: filteredId,
      };
    case "fetch/isLoading":
      return {
        ...state,
        isLoading: true,
      };
    case "fetch/isLoadingMovieList":
      return {
        ...state,
        isLoadingMovieList: true,
      };
    case "fetch/error":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isLoadingMovieList: false,
      };
    default:
      return state;
  }
}

export function fetchMoviesWithGenre() {
  return async function (dispatch, getState) {
    dispatch({type: "fetch/isLoadingMovieList"})
    const currentState = getState();

    let ids = currentState.movies.genreId.join(",");

    try {
      const res = await fetch(
        `${tmdb_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${encodeURI(
          ids
        )}`,
        options
      );
      // const res = await fetch('${tmdb_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28%2C12%2C35%2C80', options)
      if (!res.ok) {
        throw new Error(
          "Something went wrong with fetching movies using genre"
        );
      }

      const data = await res.json();
      dispatch({ type: "fetch/movies", payload: data.results });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "fetch/error", payload: error.message });
    }
  };
}

export function getMovieById(id) {
  return async function (dispatch, getState) {
    dispatch({type: "fetch/isLoading"})
    try {
     const res = await fetch(`${tmdb_url}/movie/${id}?language=en-US`, options)

      if (!res.ok) {
        throw new Error(
          "Something went wrong with fetching movie using ID"
        );
      }

      const data = await res.json();
      // console.log(data)
      dispatch({ type: "get/movie", payload: data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "fetch/error", payload: error.message });
    }
  };
}
export function addId(id) {
  return {
    type: "add/id",
    payload: id,
  };
}
