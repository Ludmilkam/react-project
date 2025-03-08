import { useState, useEffect } from "react";
import { Post } from "./PostCard/PostCard";
import { usePosts } from "../../hooks/usePosts";
import { TailSpin } from "react-loader-spinner";
import { useTags } from "../../hooks/useTags"; 

export function PostsList() {
    const { posts, loading, error } = usePosts();
    const [selectedTag, setSelectedTag] = useState("All");
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const { tags } = useTags();

    useEffect(() => {
        if (selectedTag === "All") {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter((post) => {
                return post.tag.name === selectedTag;
                
            });
            console.log(posts)
            setFilteredPosts(filtered);
        }
    }, [selectedTag, posts]);

    return (
        <div className="posts">
            <div>
                <h1 className="categoryText">
                    Tag:{" "}
                    <select
                        className="category"
                        onChange={(event) => {
                            const selectedValue = event.target.value;
                            setSelectedTag(selectedValue);
                        }}
                    >
                        <option className="option" value="All">
                            All
                        </option>
                        {tags.map((tag) => {
                            return (
                                <option
                                    className="option"
                                    key={tag.id}
                                    value={tag.name}
                                >
                                    {tag.name}
                                </option>
                            );
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
                                name={post.name}
                                description={post.description}
                                // cover_image={post.cover_image}
                                author={post.author}
                                tagList={post.tag.name}
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
