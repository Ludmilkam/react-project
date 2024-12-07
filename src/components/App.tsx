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
import { PostsList } from "./PostsList/PostsList"
import { PostPage } from "./PostPage/PostPage"

export function AppComponent(){

    return (
        <div>
            {/* <PostsList></PostsList>
            <Post
            title="Post5"
            desription="Wodiczka5"
            img=""
            author="author5"></Post> */}
            {/* <Layout>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Layout> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/posts" element={<PostsList></PostsList>}></Route>
                        <Route path = "/post/:id" element = {<PostPage></PostPage>}> </Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}