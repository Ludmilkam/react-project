import { Link, useParams } from "react-router-dom";
import "./PostCard.css";
import { LikeButton } from "../../LikeButton/LikeButton";
import { IPost } from "../../../types/interfaces";

interface IPostProps {
    post: IPost;
}

export function Post(props: IPostProps) {
    const { post } = props;

    return (
        <div className="post">
            {/* <img className="image" src={props.cover_image} alt={`${props.description} photo's`} /> */}
            <h1 className="title">{post.name}</h1>
            <p className="author">{post.author}</p>
            <p className="description">Description: {post.description}</p>
            <LikeButton post={post} />
            <p className="category">Tags: {post.tag.name}</p>
            <h3>
                comments:{" "}
                {post.comments.map((comment) => {
                    return (
                        <div>
                            <h5>{comment.header}</h5>
                            <p>{comment.body}</p>
                        </div>
                    );
                })}
            </h3>
            <Link to={`/post/${post.id}`}>
                <h5>Перейти к посту</h5>
            </Link>
        </div>
    );
}
