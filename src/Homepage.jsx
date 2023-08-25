import Header from "./components/Header";
import LetSee from "./components/LetSee";
import TagList from "./components/tags/TagList";
import MovieList from "./features/movies/MovieList";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="scrollable">
        <LetSee />
      <TagList />
      <MovieList />

      </div>
    </>
  )
}
