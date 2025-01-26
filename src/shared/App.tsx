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
    setLiked: (post: IPost) => void
}

const initialValue: ILikesContext = {
    likedItems: [],
    setLiked: (post: IPost) => {}
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
        console.log(likedPosts)
    }
    return (
        <div>
            <likesContext.Provider value={{likedItems: likedPosts, setLiked: setLiked}}>
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