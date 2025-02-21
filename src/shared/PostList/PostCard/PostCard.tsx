import { useState } from "react"
import { Link } from "react-router-dom"
import "./PostCard.css"
// import { LikeButton } from "../../LikeButton/LikeButton" 

interface IPostProps{
    name: string,
    description: string,
    // cover_image: string,
    author: string,
    tag_list: string,
    id: number
}

export function Post(props: IPostProps){
   
    return(
        <div>
            <div className="post">
                {/* <img className="image" src={props.cover_image} alt={`${props.description} photo's`} /> */}
                <h1 className="title">{props.name}</h1>
                <p className="author">{props.author}</p>
                <p className="description">Description: {props.description}</p>
                {/* <LikeButton/> */}
                <p className="category">Category: {props.tag_list}</p>
                <h3>comments</h3>
                <Link to={`/post/${props.id}`}><h5>Перейти к посту</h5></Link>
            </div>
        </div>
    )
}

