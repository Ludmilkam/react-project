interface IPostProps{
    title: string,
    desription: string,
    img: string,
    author: string
}

export function Post(props: IPostProps){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.desription}</p>
            <img src={props.img} alt={`${props.desription} photo's`} />
            <p>{props.author}</p>
        </div>
    )
}

