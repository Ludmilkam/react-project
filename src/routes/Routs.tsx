import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { PostsListPage } from "../pages/PostsListPage/PostsListPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/posts" element={<PostsListPage />}></Route>
                    <Route path="/post/:id" element={<PostPage />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                    <Route path="/liked" element={<LikedPostsPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
