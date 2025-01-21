import { Layout } from "./Layout/Layout"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { PostsListPage } from "../pages/PostsListPage/PostsListPage" 
import { PostPage } from "../pages/PostPage/PostPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"
import { createContext } from "react";
import { IPost } from "../hooks/usePosts";

interface ILikesContext{
    likedItems: IPost[]
}

const initialValue: ILikesContext = {
    likedItems: []
}
export const likesContext = createContext<ILikesContext>(initialValue)

export function AppComponent(){
    return (
        <div>
            <likesContext.Provider value={{likedItems: []}}>
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