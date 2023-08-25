import { genres } from "../../utils/useHelperFunction";
import TagItem from "./TagItem";

export default function TagList() {
  return (
    <div className="tag-space">
      <h2 className="h2">Search for movies using genre</h2>
      <ul className="tag-ul container">
        {genres.map((genre, id) => (
          <TagItem genre={genre} key={genre.id} />
        ))}
      </ul>
    </div>
  );
}

