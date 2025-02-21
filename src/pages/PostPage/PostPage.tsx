import { Navigate, useParams } from "react-router-dom";
import { usePostById } from "../../hooks/usePostById";
import { useTitle } from "../../hooks/useTitle";
import { LikeButton } from "../../shared/LikeButton/LikeButton";
import { useContext, useEffect } from "react";
// import { likesContext } from "../../context/LikesContext"; 


export function PostPage() {
    const params = useParams();
    useTitle("Post Page");
    const { post, error } = usePostById(Number(params.id));
    // const {setLiked} = useContext(likesContext)

    if (error === "Post not found") {
        return <Navigate to="*" />;
    }
    // if (post){
        // setLiked(post)
    // }


    return (
        <div>
            <div className="post">
                {/* <img className="image" src={post?.cover_image} alt="img" /> */}
                <h1 className="title">Title: {post?.name}</h1>
                <p className="author">Author: {post?.author}</p>
                <p className="description">Description: {post?.description}</p>
                <LikeButton />
                {/* <p className="category">Tags: {post?.tags}</p> */}
                <h6>{params.id}</h6>
            </div>
        </div>
    );
}
