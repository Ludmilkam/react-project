import './Main.css'
import { PostsList } from '../PostsListPage/PostsList'
import { ReactNode } from 'react'

interface IMainProps{
    children?: ReactNode
}

export function Main(props: IMainProps) {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}