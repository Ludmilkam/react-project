import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "../types/interfaces"; 

interface ILikesContext {
    likedItems: IPost[];
    setLiked: (post: IPost) => void;
    delLike: (id: number) => void;
    isLiked: (id: number) => boolean;
}

interface ILikesContextProviderProps {
    children: ReactNode;
}

const initialValue: ILikesContext = {
    likedItems: [],
    setLiked: (post: IPost) => {},
    delLike: (id: number) => {},
    isLiked: (id: number) => {
        return false;
    },
};

export const likesContext = createContext<ILikesContext>(initialValue);

export function useLikesContext() {
    return useContext(likesContext);
}

export function LikesContextProvider(props: ILikesContextProviderProps) {
    const { children } = props;
    const [likedPosts, setLikedPosts] = useState<IPost[]>([]);
    // const [posts, setPosts] = useState<IPost[]>();
    function setLiked(post: IPost) {
        const tempArray = [...likedPosts, post];
        setLikedPosts(tempArray);
    }
    function delLike(id: number) {
        const tempArray = likedPosts.filter((value) => value.id != id);
        setLikedPosts(tempArray);
    }
    function isLiked(id: number) {
        return Boolean(likedPosts.find((post) => post.id === id));
    }

    const Provider = likesContext.Provider;

    return (
        <Provider
            value={{
                likedItems: likedPosts,
                setLiked: setLiked,
                delLike: delLike,
                isLiked: isLiked,
            }}
        >
            {children}
        </Provider>
    );
}
