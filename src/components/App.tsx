// import { Post } from "./Post/Post"
// import { PostsList } from "./PostsList/PostsList"
import { Layout } from "./Layout/Layout"
import { Main } from "./Main/Main"
import { Footer } from './Footer/Footer'
import { Header } from "./Header/Header"

export function AppComponent(){

    return (
        <div>
            {/* <PostsList></PostsList>
            <Post
            title="Post5"
            desription="Wodiczka5"
            img=""
            author="author5"></Post> */}
            <Layout>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Layout>

        </div>
    )
}