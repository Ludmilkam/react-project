import './Main.css'
import { PostsList } from '../PostsListPage/PostsList'
import { ReactNode } from 'react'
// import { useTitle } from '../../hooks/useTitle'
import { useTitle } from '@vueuse/core'

interface IMainProps{
    children?: ReactNode
}

export function Main(props: IMainProps) {
    const title = useTitle()
    title.value = 'Main' 
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}