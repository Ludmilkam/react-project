import { useState, useEffect } from "react"
import { Post } from "../Post/Post"

const postsList = [
    {
        title: "post1",
        desription: "Wodiczka1",
        image:"" ,
        author:"author1",
        category:"default",
        id: 0
    },
    {
        title: "post2",
        desription: "Wodiczka2",
        image:"https://th.bing.com/th/id/OIP.JZOz6GGM0LNXxeaneIM0pwHaEo?rs=1&pid=ImgDetMain",
        author:"author2",
        category:"others",
        id: 1
    },
    {
        title: "post3",
        desription: "Wodiczka3",
        image:"https://upload.wikimedia.org/wikipedia/commons/0/07/Water_molecule.svg" ,
        author:"author3",
        category:"scientific",
        id: 2
    },
    {
        title: "post4",
        desription: "Wodiczka4",
        image:"https://th.bing.com/th/id/OIP.s2uG2rGjCvWrdELvvOmZoQHaEo?rs=1&pid=ImgDetMain" ,
        author:"author4",
        category:"similar",
        id: 3
    },
    {
        title: "post5",
        desription: "Wodiczka5",
        image:"https://th.bing.com/th/id/OIP.s2uG2rGjCvWrdELvvOmZoQHaEo?rs=1&pid=ImgDetMain" ,
        author:"author5",
        category:"similar",
        id: 4
    },
    {
        title: "post6",
        desription: "Wodiczka6",
        image:"https://th.bing.com/th/id/OIP.JZOz6GGM0LNXxeaneIM0pwHaEo?rs=1&pid=ImgDetMain",
        author:"author6",
        category:"others",
        id: 5
    }
]  

export function PostsList(){
        const [selectedCategory, setSelectedCategory] = useState("all")
        const [filteredPosts, setFilteredPosts] = useState(postsList)
        useEffect(() => {
            console.log(selectedCategory)
            if (selectedCategory === "all") {
                setFilteredPosts(postsList)
            } else {
                const filtered = postsList.filter((post) => {
                    return post.category === selectedCategory
                })
                setFilteredPosts(filtered)
            }
        }, [selectedCategory])

    return (
        <div className="posts">
            <div >
                <h1 className="categoryText">Category:  <select className="category" onChange={(event) => {
                        const selectedValue = event.target.value
                        setSelectedCategory(selectedValue)
                    }}>
                        <option value="all">All</option>
                        <option value="similar">Similar</option>
                        <option value="default">Default</option>
                        <option value="scientific">Scientific</option>
                        <option value="others">Others</option>
                    </select>
                </h1>
                
            </div>

            {filteredPosts.map((post) => {
                return <Post
                        title={post.title}
                        desription={post.desription}
                        img={post.image}
                        author={post.author}
                        category={post.category}
                        id={post.id}
                        key={post.id}></Post>
            })}
        </div>
    )
}