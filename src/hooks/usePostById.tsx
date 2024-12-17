import { useState, useEffect } from "react";
import { IPost } from "./usePosts";


export function usePostById(id: number){
    const [post , setPost] = useState<IPost>()
    
    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`https://fakestoreapi.com/product/${id}`)
            const postData = await response.json()
            setPost(postData)
        }
        fetchProduct()
    }, [id])
    return {post: post}
}