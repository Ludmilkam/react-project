import { useEffect, useState } from "react";

export interface IPost{
    id: number
    title: string,
    description: string
    cover_image: string
    author: string
    category: string

} 

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("https://dev.to/api/articles")
            const posts = await response.json()
            setPosts(posts)
            console.log(posts)

        }
        fetchPosts()
    }, [])
    return {posts: posts}
}