import { Link } from "react-router-dom";
import "./Header.css";
import { SearchBar } from "../SearchBar/SearchBar";

export function Header() {

  return (
    <div>
      <header className="header">
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/07/Water_molecule.svg"
            alt=""
          />
        </Link>
        <button className="allPosts">
          <Link to="/posts">
            <p className="allPostsText">All posts</p>
          </Link>
        </button>
        <button className="recomendations">
          <p className="recomendationsText">Recomendations</p>
        </button>
        <SearchBar/>
        <button className="yourPosts">
          <p className="yourPostsText">Your posts</p>
        </button>
        <button className="liked">
            <Link to="/liked">
          <p className="likedText">Liked</p>
          </Link>
        </button>
        <Link to="/login">
        <button className="yourProfile">
          <p className="yourProfileText">Your Profile</p>
        </button>
        </Link>
      </header>
    </div>
  );
}
