import { useContext, useState } from "react";
import { likesContext } from "../App";
import { usePostById } from "../../hooks/usePostById";
import { useParams } from "react-router-dom";
import "./LikeButton.css"

export function LikeButton() {
    const [isLike, setIsLike] = useState(false); 
    // бедняжки мои идеи...
    // const [disabled, setDisabled] = useState(false); 
    const {setLiked, delLike} = useContext(likesContext)
    const params = useParams();
    const { post } = usePostById(Number(params.id));

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
    function toggleLike(){
        if (post && isLike) {
            delLike(post.id); 
        } else if (post) {
            setLiked(post); 
            
        }
        setIsLike(!isLike)
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
            <h2>Likes: {isLike ? 1: 0} </h2>
            <button className={`like ${!isLike ? "delLike": ""}`} onClick={toggleLike}>
                Типо лайк
            </button>

        </div>
    );
}
