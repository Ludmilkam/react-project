import { Post } from "./Post"
import { PostList } from "./PostList"

export function AppComponent(){

    return (
        <div>
            <PostList></PostList>
            <Post
            title="Post5"
            desription="Wodiczka5"
            img=""
            author="author5"></Post>
        </div>
    )
}