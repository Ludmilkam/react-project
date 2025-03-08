import { useTitle } from '../../hooks/useTitle'
import './Main.css'
import { ReactNode } from 'react'

interface IMainProps{
    children?: ReactNode
}

export function Main(props: IMainProps) {
    useTitle("Main Page")
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}