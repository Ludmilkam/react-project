import { useState, useEffect } from "react";
import { IPost } from "./usePosts";
import { Navigate } from "react-router-dom";


export function usePostById(id: number | undefined){
    const [post,setPost] = useState<IPost>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    console.log(id)
    useEffect(() => {
        if(!id || isNaN(id)){
            setError("Invalid id")
            return 
        }
        console.log(id)
        
        async function fetchPost() {
            try{
                setLoading(true)
                const response = await fetch(`https://dev.to/api/articles/${id}`)
                if (response.status === 404) {
                    throw new Error("Post not found");
                }
                const postData = await response.json()
                console.log(postData)
                setPost(postData)
                console.log(id)

            }catch(error){
                console.log(error)
                if (error instanceof Error){
                    setError(error.message)
                }
            }finally{
                setLoading(false)
            }

        }
        fetchPost()
    }, [id])
    return {post: post, loading: loading, error: error}
}
