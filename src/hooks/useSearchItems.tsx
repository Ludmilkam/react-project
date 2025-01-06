
import { useEffect, useState } from "react";

export interface IItems{
    id: number;
    title: string
}

export function useSearchItems() {
    const [searchItems, setSearchItems] = useState<IItems[]>([]); 

    useEffect(() => {
        async function fetchItems() {
            const response = await fetch("https://dev.to/api/articles");
            const itemsData = await response.json();
            console.log(itemsData)
            setSearchItems(itemsData); 
        }
        fetchItems();
    }, []);

    return { searchItems };
}