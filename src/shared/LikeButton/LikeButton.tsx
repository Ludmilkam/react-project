import { useContext, useState } from "react";
import { useLikesContext } from "../../context/LikesContext";
import { usePostById } from "../../hooks/usePostById";
import { useParams } from "react-router-dom";
import "./LikeButton.css";
import { IPost } from "../../types/interfaces";

interface ILikeButtonProps{
    post: IPost
}

export function LikeButton(props: ILikeButtonProps) {
    // Из-за того что я убрала этот юз стейт я потратила сутки (ваших 15 мин) чтоб все починить
    // const [isLike, setIsLike] = useState(false);
    // бедняжки мои идеи...
    // const [disabled, setDisabled] = useState(false);
    // const {posts} = useContext(postsContext)
    const { setLiked, delLike, isLiked } = useLikesContext();
    const {post} = props
    // const params = useParams();
    // const { post } = usePostById(Number(params.id));

    // И чем вам мои способы не нравятся🙄
    // опять все переделывать

    // Типо способ 1
    // function notLiked() {
    //     if (like < 1 && like >= 0) {
    //         setLike(like + 1)
    //     } else if (like == 1) {
    //         setLike(like - 1)
    //     }
    // }
    // Типо способ 2 с disabled
    // function notLiked() {
    //     if (like < 1 && like >= 0) {
    //         setLike(like + 1);
    //         setDisabled(true);
    //     }
    //     if (post){
    //         setLiked(post)
    //     }
    // }
    // 3 способ ибо прошлые ты забраковал
    // ну оно ж работает
    function toggleLike() {
        if (post) {
            if (isLiked(post.id)) {
                delLike(post.id);

            } else {
                setLiked(post);
            }
        }
    }

    return (
        // <div>
        //     <h2>Likes: {like} </h2>
        //     {/* Относится к способу 1 */}
        //     {/* <button onClick={notLiked}>
        //             Ну допустим лайк
        //         </button> */}
        //     {/* Относится к способу 2 */}
        //     <button className="like" onClick={notLiked} disabled={disabled}>
        //         Типо лайк
        //     </button>
        // </div>
        <div>
            <h2>Likes: {post && isLiked(post.id) ? 1 : 0}</h2>
            <button
                className={`like ${post && isLiked(post.id) ? "delLike" : ""}`}
                onClick={toggleLike}
            >
                Типо лайк
            </button>
        </div>
    );
}
