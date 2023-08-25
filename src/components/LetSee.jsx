import { useEffect, useState } from "react";
import moviePosters from "../utils/useHelperFunction";

export default function LetSee() {
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosterIndex(
        (prevIndex) => (prevIndex + 1) % moviePosters.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
return (
  <div className="Appp">
    <div className="left">
      <h1>
        FLING
        MOVIES
      </h1>
      <h3 className="firstP">Unleash you cinematic fling</h3>
      <p className="secondP">
        Welcome to the planet where movies come to life. Check out more
        information about your favourite movies and get personally involved
        with your favourite characters.
      </p>
    </div>
    <div className="right">
      <img
        className="movie-poster"
        src={moviePosters[currentPosterIndex]}
        alt="Movie Poster"
      />
    </div>
  </div>
);
}