import { useEffect, useState } from "react";

export interface IPost{
    id: number
    title: string,
    description: string
    cover_image: string
    author: string
    tags: string
} 

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("https://dev.to/api/articles")
            const postsData = await response.json()
            setPosts(postsData)
        }
        fetchPosts()
    }, [])
    return {posts: posts}
}