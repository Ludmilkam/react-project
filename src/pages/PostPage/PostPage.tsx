import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTitle } from '@vueuse/core'

export function PostPage() {
    const {postId} = useParams()
    const title = useTitle()
    title.value = 'Post Page' 
    const [post, setPost] = useState({
        title: '',
        cover_image: '',
        tags: [],
        // не понимаю что он делает
        // body_markdown: '',
        author: '',
        description: '',
        category: ''
    })

    useEffect(() => {
        async function fetchPost() {
            const response = await fetch(`https://dev.to/api/articles/${postId}`)
            const post = await response.json()
            console.log(post)

            setPost({
              title: post.title,
              cover_image: post.cover_image,
              tags: post.tags,
            //   body_markdown: post.body_markdown,
              author: post.user.username,  
              description: post.description,
              category: post.tags.join(',') 
            })
        }
        
        fetchPost()
    }, [postId])
    return (
        <div>   
            <div className="post">
                <img className="image" src={post.cover_image} alt="img" />
                <h1 className="title">Title: {post.title}</h1>
                <p className="author">Author: {post.author}</p>
                <p className="description">Description:{post.description}</p>
                <h2>Likes: </h2>
                <p className="category">Category: {post.category}</p>
                <h6>{postId}</h6>

            </div>
        </div>
    )
}

