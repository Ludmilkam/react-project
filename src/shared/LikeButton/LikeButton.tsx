import { useState } from "react";

export function LikeButton() {
    const [like, setLike] = useState(0); //false
    const [disabled, setDisabled] = useState(false); //true
    // Типо способ 1
    // function notLiked() {
    //     if (like < 1 && like >= 0) {
    //         setLike(like + 1)
    //     } else if (like == 1) {
    //         setLike(like - 1)
    //     }
    // }
    // Типо способ 2 с disabled
    function notLiked() {
        if (like < 1 && like >= 0) {
            setLike(like + 1);
            setDisabled(true);
        }
    }
    return (
        <div>
            <h2>Likes: {like} </h2>
            {/* Относится к способу 1 */}
            {/* <button onClick={notLiked}>
                    Ну допустим лайк
                </button> */}
            {/* Относится к способу 2 */}
            <button className="like" onClick={notLiked} disabled={disabled}>
                Типо лайк
            </button>
        </div>
    );
}
