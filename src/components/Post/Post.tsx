import { useState } from "react"
import "./Post.css"

interface IPostProps{
    title: string,
    desription: string,
    img: string,
    author: string
}

export function Post(props: IPostProps){
    const [like, setLike] = useState(0) //false
    const [disabled, setDisabled] = useState(false) //true
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
            setLike(like + 1)
            setDisabled(true)

        }
    }
    // function liked(){
    //         setDisabled(true)
    // }
    return(
        <div>
            <div className="post">
                <img className="image" src={props.img} alt={`${props.desription} photo's`} />
                <h1 className="title">{props.title}</h1>
                <p className="author">{props.author}</p>
                <p className="description">Description:{props.desription}</p>
                <h2>Likes: {like}</h2>
                {/* Относится к способу 1 */}
                {/* <button onClick={notLiked}>
                    Ну допустим лайк
                </button> */}
                {/* Относится к способу 2 */}
                <button className="like" onClick={notLiked} disabled={disabled}>
                    Типо лайк
                </button>
                <h3>comments</h3>
            </div>
            
        </div>
    )
}

