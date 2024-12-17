import { useState, useEffect } from "react";


const [categories, setCategories] = useState<string[]>([])
export function useCategories(){
    useEffect(() => {
        async function fetchCategories(){
            const response = await fetch("https://fakestoreapi.com/products/categories")
            const categoriesData = await response.json()
            setCategories(categoriesData)
        }
        fetchCategories()
    }, [])
    return {categories: categories}
}


