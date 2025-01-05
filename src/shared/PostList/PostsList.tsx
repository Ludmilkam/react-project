import { useState, useEffect } from "react";
import { Post } from "./PostCard/PostCard";
import { usePosts } from "../../hooks/usePosts";
import { TailSpin } from "react-loader-spinner";

export function PostsList() {
  const { posts, loading, error } = usePosts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    console.log(selectedCategory);
    if (selectedCategory === "all") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => {
        return post.tags === selectedCategory;
      });
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, posts]);

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
            <option value="all">All</option>
            <option value="similar">Similar</option>
            <option value="default">Default</option>
            <option value="scientific">Scientific</option>
            <option value="others">Others</option>
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
