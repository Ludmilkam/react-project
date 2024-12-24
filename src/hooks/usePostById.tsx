import { useState, useEffect } from "react";
import { IPost } from "./usePosts";


export function usePostById(id: number | undefined){
    const [post,setPost] = useState<IPost>()
    useEffect(() => {
        if(!id){
            return
        }
        async function fetchPost() {
            const response = await fetch(`https://dev.to/api/articles/${id}`)
            const postData = await response.json()
            setPost(postData)
        }
        fetchPost()
    }, [id])
    return {post: post}
}
