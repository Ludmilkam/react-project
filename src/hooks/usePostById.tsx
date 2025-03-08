import { useState, useEffect } from "react";
import { IPost } from "../types/interfaces";

export function usePostById(id: number | undefined) {
    const [post, setPost] = useState<IPost>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    console.log(id);
    useEffect(() => {
        if (!id || isNaN(id)) {
            setError("Invalid id");
            return;
        }
        console.log(id);

        async function fetchPost() {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://127.0.0.1:8000/api/post/${id}`
                );
                const result = await response.json();
                if (response.status === 404) {
                    // throw new Error("Post not found");
                    setError(result.message);
                }

                if (result.status === "ok") {
                    setPost(result.data);
                } else {
                    setError(result.message);
                }

            } catch (error) {
                console.log(error);
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [id]);
    return { post: post, loading: loading, error: error };
}
