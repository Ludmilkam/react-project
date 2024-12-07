import { Link } from "react-router-dom"
import "./Header.css"

export function Header(){
    // const [count, setCount] = useState(0) // useState принимает инициальное значение
    return (
        <div>
                <header className="header">
                    <img className = "logo" src="https://upload.wikimedia.org/wikipedia/commons/0/07/Water_molecule.svg" alt="" />
                    <button className="allPosts">
                        <Link to="/posts">
                        <p className="allPostsText">All posts</p>
                        </Link>
                    </button>
                    <button className="recomendations">
                        <p className="recomendationsText">Recomendations</p>
                    </button>

                    <div>
                        <input className="searchBar" type="text" placeholder="Пошук чогось" />
                        <button className="searchBarSvg">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 26L20.2 20.2M23.3333 12.6667C23.3333 18.5577 18.5577 23.3333 12.6667 23.3333C6.77563 23.3333 2 18.5577 2 12.6667C2 6.77563 6.77563 2 12.6667 2C18.5577 2 23.3333 6.77563 23.3333 12.6667Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    <button className="yourPosts">
                        <p className="yourPostsText">Your posts</p>
                    </button>
                    <button className="liked">
                        <p className="likedText">Liked</p>
                    </button>
                    <button className="yourProfil">
                        <p className="yourProfilText">Your Profil</p>
                    </button>
                </header>      
                        
        </div>
    )
}