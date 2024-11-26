import { useState } from "react"

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
    function liked(){
            setDisabled(true)

    }
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.desription}</p>
            <img src={props.img} alt={`${props.desription} photo's`} />
            <p>{props.author}</p>
            <h2>Like: {like}</h2>
            {/* Относится к способу 1 */}
            {/* <button onClick={notLiked}>
                Ну допустим лайк
            </button> */}
            {/* Относится к способу 2 */}
            <button onClick={notLiked} disabled={disabled}>
                Ну допустим лайк
            </button>

        </div>
    )
}

