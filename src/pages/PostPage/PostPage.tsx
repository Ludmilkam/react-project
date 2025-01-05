import { Navigate, useParams } from "react-router-dom";

import { usePostById } from "../../hooks/usePostById";
import { useTitle } from "../../hooks/useTitle";

export function PostPage() {
  const params = useParams();
  useTitle("Post Page")
  const { post ,error} = usePostById(Number(params.id));
  if (error === "Post not found") {
    return <Navigate to="*" />;
  }
  return (
    <div>
      <div className="post">
        <img className="image" src={post?.cover_image} alt="img" />
        <h1 className="title">Title: {post?.title}</h1>
        <p className="author">Author: {post?.author}</p>
        <p className="description">Description:{post?.description}</p>
        <h2>Likes: </h2>
        <p className="category">Tags: {post?.tags}</p>
        <h6>{params.id}</h6>
      </div>
    </div>
  );
}
