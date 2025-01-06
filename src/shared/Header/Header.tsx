// import { Link } from "react-router-dom";
// import Modal from "react-modal";
// import { IItems, useSearchItems } from "../../hooks/useSearchItems";
// import { useState, useEffect } from "react";
// import "./Header.css";

// export function Header() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [entered, setEntered] = useState("");
//     const { searchItems } = useSearchItems();
//     const [filteredItems, setFilteredItems] = useState<IItems[]>([]);

//     useEffect(() => {
//         if (entered.trim() === "") {
//             setFilteredItems([]);
//             return;
//         } else {
//             const filtered = searchItems.filter((item) => {
//                 return item.title.toLowerCase().includes(entered.toLowerCase());
//             });
//             setFilteredItems(filtered);
//         }
//     }, [entered, searchItems]);

//     return (
//         <div>
//             <header className="header">
//                 <Link to="/">
//                     <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/07/Water_molecule.svg" alt="" />
//                 </Link>
//                 <button className="allPosts">
//                     <Link to="/posts">
//                         <p className="allPostsText">All posts</p>
//                     </Link>
//                 </button>
//                 <button className="recomendations">
//                     <p className="recomendationsText">Recomendations</p>
//                 </button>

//                 <div>
//                     <input
//                         className="searchBar"
//                         type="text"
//                         value={entered}
//                         onChange={(e) => setEntered(e.target.value)}
//                         placeholder="Пошук чогось"
//                         onClick={() => setIsModalOpen(true)}
//                     />
//                     <button className="searchBarSvg" onClick={() => setIsModalOpen(true)}>
//                         <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M26 26L20.2 20.2M23.3333 12.6667C23.3333 18.5577 18.5577 23.3333 12.6667 23.3333C6.77563 23.3333 2 18.5577 2 12.6667C2 6.77563 6.77563 2 12.6667 2C18.5577 2 23.3333 6.77563 23.3333 12.6667Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </button>
//                 </div>

//                 <button className="yourPosts">
//                     <p className="yourPostsText">Your posts</p>
//                 </button>
//                 <button className="liked">
//                     <p className="likedText">Liked</p>
//                 </button>
//                 <button className="yourProfil">
//                     <p className="yourProfilText">Your Profil</p>
//                 </button>
//             </header>

//             <Modal
//                 isOpen={isModalOpen}
//                 onRequestClose={() => setIsModalOpen(false)}
//                 contentLabel="Search Modal"
//                 className="modal"
//                 overlayClassName="modal-overlay"
//             >
//                 <button onClick={() => setIsModalOpen(false)}>Close</button>
//                 <input
//                     type="text"
//                     value={entered}
//                     onChange={(e) => setEntered(e.target.value)}
//                     placeholder="Search items..."
//                 />
//                 <ul>
//                     {filteredItems.map((item) => (
//                         <li key={item.id}>{item.title}</li>
//                     ))}
//                 </ul>
//             </Modal>
//         </div>
//     );
// }
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { IItems, useSearchItems } from "../../hooks/useSearchItems";
import { useState, useEffect } from "react";
import "./Header.css";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entered, setEntered] = useState("");
  const { searchItems } = useSearchItems();
  const [filteredItems, setFilteredItems] = useState<IItems[]>([]);

  useEffect(() => {
    if (entered.trim() === "") {
      setFilteredItems([]);
      return;
    } else {
      const filtered = searchItems.filter((item) => {
        return item.title.toLowerCase().includes(entered.toLowerCase());
      });
      setFilteredItems(filtered);
    }
  }, [entered, searchItems]);

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

        <div>
          <input
            className="searchBar"
            type="text"
            value={entered}
            onChange={(e) => setEntered(e.target.value)}
            placeholder="Пошук чогось"
            onClick={() => setIsModalOpen(true)}
          />
          <button className="searchBarSvg">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 26L20.2 20.2M23.3333 12.6667C23.3333 18.5577 18.5577 23.3333 12.6667 23.3333C6.77563 23.3333 2 18.5577 2 12.6667C2 6.77563 6.77563 2 12.6667 2C18.5577 2 23.3333 6.77563 23.3333 12.6667Z"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Search Modal"
            className="searchBarModal"
            overlayClassName="modal-overlay"
          >
              {filteredItems.map((item) => (
                <p key={item.id}>
                  <Link to={`/post/${item.id}`}>{item.title}</Link>
                </p>
              ))}
          </Modal>
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
  );
}
