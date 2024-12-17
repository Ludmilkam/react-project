import { PostsList } from "../../shared/PostList/PostsList" 
export function PostsListPage(){

    // в react есть возможность создавать пустые теги
    // react fragment это тег предоставляемый реактом в случае если лень создавать дополнительный Node елемент 
    return <>
            <PostsList></PostsList>
            </>
}