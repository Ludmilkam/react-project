import { Link } from "react-router-dom";
import "./Header.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { useUserContext } from "../../context/UserContext";

export function Header() {
    const { user } = useUserContext();
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
                <SearchBar />
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
                        <img
                            className="profilePhoto"
                            src={
                                user
                                    ? user.image
                                    : "https://s3-alpha-sig.figma.com/img/665e/08ea/e5eed54973ca1fe080df81cdefdeaaec?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3PE9VK72HVrpmTjJZhG69zDnZEz~QIvDNeCNzgc5ui3u42eKFc09aoVIHyrNePBoxzDbsWQcsU4nNsBNG0P7IFugnvX7fz8PUVx0a-Yh41xGJESj3ceBp6L50pEUTSL6kA9nTbUoBWCzNVxXcnFQVwJ0J3FHFQ8kxGhC3~5IEOlnflkZJ0ArUeYsOgE1FxomFrbM23O7YaTTMwWeMzczlXntACSDOWQpMCU2TQPcI~pWjAnwkYauDN~oO-ZWKOV0F3C075bzZq~yY7goyJxM2OHcSvpOsrz4Y7Vn7zck~aZVkxZKc5jgjRwrKiYSo0fVkJuHTfXJxUgqT7cnt9rnQ__"
                            }
                            alt=""
                        />
                    </button>
                </Link>
            </header>
        </div>
    );
}
