import { useState, useEffect } from "react"
import { ICategories } from "../types/interfaces"



export function useCategories(){
    const [categories, setCategories] = useState<ICategories[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchCategories(){
            try {
                setLoading(true)
                const response = await fetch("http://127.0.0.1:8000/api/tag/all")
                const result = await response.json()
                if (result.status === "error"){
                    setError(result.message)
                } else {
                    setCategories(result.data)
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
        fetchCategories()
        
    }, [])
    return {categories: categories, loading: loading, error: error}
}