import { useState, useEffect } from "react"
import { ICategory } from "../types/interfaces"



export function useTags(){
    const [tags, setTags] = useState<ICategory[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchtags(){
            try {
                setLoading(true)
                const response = await fetch("http://127.0.0.1:8000/api/tag/all")
                const result = await response.json()
                if (result.status === "ok"){
                    setTags(result.data)
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
    return {tags: tags, loading: loading, error: error}
}