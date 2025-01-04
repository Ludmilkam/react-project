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
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        async function fetchPosts() {
            try{
                const response = await fetch("https://dev.to/api/articles")
                const postsData = await response.json()
                setPosts(postsData)
            }catch(error){
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally{
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])
    return {posts: posts, loading: loading, error: error}
}