// import { Post } from "./Post/Post"
// import { PostsList } from "./PostsList/PostsList"
import { Layout } from "./Layout/Layout"
import { Main } from "./Main/Main"
import { Footer } from './Footer/Footer'
import { Header } from "./Header/Header"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { PostsListPage } from "../pages/PostsListPage/PostsListPage" 
import { PostPage } from "../pages/PostPage/PostPage"

export function AppComponent(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/posts" element={<PostsListPage></PostsListPage>}></Route>
                        <Route path = "/post/:postId" element = {<PostPage></PostPage>}> </Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}