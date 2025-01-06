import { useState, useEffect } from "react"

export interface ICategories{
    id: number;
    name: string
}

export function useCategories(){
    const [categories, setCategories] = useState<ICategories[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchCategories(){
            try {
                setLoading(true)
                const response = await fetch("https://dev.to/api/tags")
                const categoriesData = await response.json()
                setCategories(categoriesData)
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