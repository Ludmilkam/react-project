import { useEffect, useState } from "react"
import { IComment } from "../types/interfaces"


export function useComments(){
    const [comments, setComments] = useState<IComment[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchtags(){
            try {
                setLoading(true)
                const response = await fetch("http://127.0.0.1:8000/api/comment/all")
                const result = await response.json()
                if (result.status === "ok"){
                    setComments(result.data)
                } else {
                    setError(result.message)
                }
            } catch(error){
                if (error instanceof Error) {
                    setError(error.message)
                }
                console.log(error)

            } finally {
                setLoading(false)
            }
        }
        fetchtags()
        
    }, [])
    return {comments: comments, loading: loading, error: error}
}