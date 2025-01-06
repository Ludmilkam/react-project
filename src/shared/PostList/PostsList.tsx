import { useState, useEffect } from "react";
import { Post } from "./PostCard/PostCard";
import { usePosts } from "../../hooks/usePosts";
import { TailSpin } from "react-loader-spinner";
import { useCategories } from "../../hooks/useCategories";


export function PostsList() {
  const { posts, loading, error } = usePosts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(posts);


  useEffect(() => {
    console.log(selectedCategory);
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => {
        return post.tags.includes (selectedCategory);
      });
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, posts]);
  const { categories } = useCategories();

  return (
    <div className="posts">
      <div>
        <h1 className="categoryText">
          Category:{" "}
          <select
            className="category"
            onChange={(event) => {
              const selectedValue = event.target.value;
              setSelectedCategory(selectedValue);
            }}
          >
            <option className="option" value="All">All</option>
            {categories.map((category) =>{
              console.log(filteredPosts)
              return(
                <option className="option" key={category.id} value={category.name}>{category.name}</option>
              )
            })}
          </select>
        </h1>
      </div>

      {loading === true ? (
        <div>
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : error !== "" ? (
        <div>{error}</div>
      ) : (
        <div>
          {filteredPosts.map((post) => {
            return (
              <Post
                title={post.title}
                description={post.description}
                cover_image={post.cover_image}
                author={post.author}
                tag_list={post.tags}
                id={post.id}
                key={post.id}
              ></Post>
            );
          })}
        </div>
      )}
    </div>
  );
}
