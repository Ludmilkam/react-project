import { Layout } from "./Layout/Layout"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { PostsListPage } from "../pages/PostsListPage/PostsListPage" 
import { PostPage } from "../pages/PostPage/PostPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"

export function AppComponent(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/posts" element={<PostsListPage></PostsListPage>}></Route>
                        <Route path = "/post/:id" element = {<PostPage></PostPage>}></Route>
                        <Route path="*" element = {<NotFoundPage></NotFoundPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}