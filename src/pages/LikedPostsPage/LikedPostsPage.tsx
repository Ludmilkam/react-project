import { useParams } from "react-router-dom";
import { useLikesContext } from "../../context/LikesContext";
import { useTitle } from "../../hooks/useTitle";
import { LikeButton } from "../../shared/LikeButton/LikeButton";

export function LikedPostsPage() {
    const params = useParams();
    useTitle("Liked Posts Page");
    const { likedItems } = useLikesContext();

    return (
        <div>
            {likedItems.map((likedItem) => {
                return(
                <div className="post">
                    {/* <img className="image" src={likedItem.cover_image} alt="img" /> */}
                    <h1 className="title">Title: {likedItem.name}</h1>
                    <p className="author">Author: {likedItem.author}</p>
                    <p className="description">
                        Description:{likedItem.description}
                    </p>
                    <LikeButton post={likedItem} />
                    <p className="category">tag: {likedItem.tag.name}</p>
                    <h6>{params.id}</h6>
                </div>
                )
            })}
        </div>
    );
}
