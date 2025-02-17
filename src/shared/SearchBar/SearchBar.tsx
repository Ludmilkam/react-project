import { useEffect, useRef, useState } from "react";
import { IPost, usePosts } from "../../hooks/usePosts";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entered, setEntered] = useState("");
  const { posts } = usePosts();
  const [filteredItems, setFilteredItems] = useState<IPost[]>([]);
  // для 2 способа модалочки
  const modalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const inputOnFocus = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if (entered.trim() === "") {
      setFilteredItems([]);
      return;
    } else {
      const filtered = posts.filter((item) => {
        return item.name.toLowerCase().includes(entered.toLowerCase());
      });
      setFilteredItems(filtered);
    }
  }, [entered, posts]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target != modalRef.current &&
        inputRef.current != event.target
      ) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={entered}
        onChange={(e) => setEntered(e.target.value)}
        placeholder="Пошук чогось"
        onFocus={inputOnFocus}
        ref={inputRef}
      />
      <svg
        className="search-bar-svg"
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
      {/* 1 способ модалочки (P.S.: Бедная моя модалочка) */}
      {/* ваш onFocus сломал мою модалочку 😑😕😤, я потом ее починю...😔 */}
      {/* <Modal
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
          </Modal> */}
      {/* 2 способ */}
      {/* Работает, но немного сомнительно */}
      {isModalOpen ? (
        <div ref={modalRef} className="search-bar-modal">
          {filteredItems.map((item) => (
            <div className="search-item">
              <svg
                className="search-item-svg"
                width="24"
                height="24"
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
              <div key={item.id} className="search-item-text">
                <Link to={`/post/${item.id}`}>{item.name}</Link>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
