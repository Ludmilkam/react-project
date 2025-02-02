import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { PostsListPage } from "../pages/PostsListPage/PostsListPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route
                        path="/posts"
                        element={<PostsListPage></PostsListPage>}
                    ></Route>
                    <Route
                        path="/post/:id"
                        element={<PostPage></PostPage>}
                    ></Route>
                    <Route
                        path="*"
                        element={<NotFoundPage></NotFoundPage>}
                    ></Route>
                    <Route
                    path="/liked"
                    element={<LikedPostsPage></LikedPostsPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
