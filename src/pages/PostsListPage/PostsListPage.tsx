import { useTitle } from "../../hooks/useTitle"
import { PostsList } from "../../shared/PostList/PostsList" 

export function PostsListPage(){
    useTitle("Post List Page")
    // в react есть возможность создавать пустые теги
    // react fragment это тег предоставляемый реактом в случае если лень создавать дополнительный Node елемент 
    return <>
            <PostsList></PostsList>
            </>
}