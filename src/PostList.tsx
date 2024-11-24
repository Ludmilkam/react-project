import { Post } from "./Post"

export function PostList(){
    const postList = [
        {
            title: "post1",
            desription: "Wodiczka1",
            image:"" ,
            author:"author1",
            id: 0
        },
        {
            title: "post2",
            desription: "Wodiczka2",
            image:"https://th.bing.com/th/id/OIP.JZOz6GGM0LNXxeaneIM0pwHaEo?rs=1&pid=ImgDetMain",
            author:"author2",
            id: 1
        },
        {
            title: "post3",
            desription: "Wodiczka3",
            image:"https://upload.wikimedia.org/wikipedia/commons/0/07/Water_molecule.svg" ,
            author:"author3",
            id: 2
        },
        {
            title: "post4",
            desription: "Wodiczka4",
            image:"https://th.bing.com/th/id/OIP.s2uG2rGjCvWrdELvvOmZoQHaEo?rs=1&pid=ImgDetMain" ,
            author:"author4",
            id: 3
        }
    ]        
    return(
        <div>
            {postList.map((post) => {
                return <Post
                        title={post.title}
                        desription={post.desription}
                        img={post.image}
                        author={post.author}
                        key={post.id}></Post>
            })}
        </div>
    )
}