import { Layout } from "./Layout/Layout"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { PostsListPage } from "../pages/PostsListPage/PostsListPage" 
import { PostPage } from "../pages/PostPage/PostPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"
import { createContext, useState } from "react";
import { IPost } from "../hooks/usePosts";

interface ILikesContext{
    likedItems: IPost[],
    setLiked: (post: IPost) => void,
    delLike: (id : number) =>void,
    isLiked: (id: number) => boolean
}

const initialValue: ILikesContext = {
    likedItems: [],
    setLiked: (post: IPost) => {},
    delLike: (id : number) =>{},
    isLiked: (id: number) => {return false}
}
export const likesContext = createContext<ILikesContext>(initialValue)

export function AppComponent(){

    const [likedPosts, setLikedPosts] = useState<IPost[]>([])
    function setLiked(post: IPost){
        const tempArray = [
            ...likedPosts,
            post
        ]
        setLikedPosts(tempArray)
    }
    function delLike(id: number){
        const tempArray = likedPosts.filter(value =>value.id != id)
        setLikedPosts(tempArray)
    }
    function isLiked(id : number){
        return Boolean(likedPosts.find(post => post.id === id))
    }
    return (
        <div>
            <likesContext.Provider value={{likedItems: likedPosts, setLiked: setLiked, delLike: delLike, isLiked: isLiked}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/posts" element={<PostsListPage></PostsListPage>}></Route>
                        <Route path = "/post/:id" element = {<PostPage></PostPage>}></Route>
                        <Route path="*" element = {<NotFoundPage></NotFoundPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            </likesContext.Provider>
        </div>
    )
}