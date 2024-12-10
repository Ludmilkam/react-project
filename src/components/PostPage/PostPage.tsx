import { useParams } from "react-router-dom";




export function PostPage (){
    const params = useParams()
    return (
        <div className="post">
            <img src="" alt="img" />
            <h1 className="title">Title: </h1>
            <p className="author">Author:</p>
            <p className="description">Description:</p>
            <h2>Likes: </h2>
            <p className="category">Category: </p>
            <h6>{params.id}</h6>   
        </div>
        
    )
}