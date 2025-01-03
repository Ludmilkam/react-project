import { useParams } from "react-router-dom";
import { useTitle } from '@vueuse/core'
import { usePostById } from "../../hooks/usePostById";

export function PostPage() {
    const params = useParams()
    const title = useTitle()
    title.value = 'Post Page' 
    const {post} = usePostById(Number(params.id))
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
    )
}

