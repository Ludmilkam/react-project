import { useNavigate, useParams } from "react-router-dom";
import { usePostById } from "../../hooks/usePostById";
import { useTitle } from "../../hooks/useTitle";
import { LikeButton } from "../../shared/LikeButton/LikeButton";


export function PostPage() {
    const params = useParams();
    useTitle("Post Page");
    const { post, error , loading} = usePostById(Number(params.id));
    const navigate = useNavigate()
    // const {setLiked} = useContext(likesContext)

    if (loading){
        return <h1>Loading...</h1>
    }
    if (error === "Post not found") {
        navigate("/PostNotFound")
        return null
    }
    if (!post){
        return <h1>Post not found</h1>
    }

    return (
        <div>
            <div className="post">
                {/* <img className="image" src={post?.cover_image} alt="img" /> */}
                <h1 className="title">Title: {post?.name}</h1>
                <p className="author">Author: {post?.author}</p>
                <p className="description">Description: {post?.description}</p>
                <LikeButton post={post}/>
                <p className="category">tag: {post?.tag.name}</p>
                <h6>{params.id}</h6>
                
            </div>
        </div>
    );
}
