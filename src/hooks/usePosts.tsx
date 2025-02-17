import { useEffect, useState } from "react";

export interface IPost{
    id: number
    name: string,
    description: string
    // cover_image: string
    time_publicated: number
    author: string
    comments: []
    // tags: string
} 

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        async function fetchPosts() {
            try{
                const response = await fetch("http://localhost:8000/api/post/all")
                const result = await response.json()
                if (result.status === 'error') {
                    setError(result.message)
                } else {
                    setPosts(result.data)
                }
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