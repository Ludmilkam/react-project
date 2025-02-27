// не надо
import { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { Main } from "../Main/Main"
import { Footer } from '../Footer/Footer'
import { Header } from "../Header/Header"

import "./Layout.css"
// не надо
import { useTitle } from "../../hooks/useTitle"

// нет смысла мы не испоьзуем props для Layout
interface ILayoutProps {
    // children специальное свойство React компонента указывается в props позволяет добавить другие элементы 
    // между открывающим и закрывающим тегом самого компонента 
    children? : ReactNode
}


export function Layout(props:ILayoutProps){
    // тут нет смысла
    useTitle("Main")
    return(
        <div className="Layout">
            <Header></Header>
            <Main><Outlet></Outlet></Main>
            <Footer></Footer>
            {/* нет смысла */}
            {props.children}
        </div>

    )   
}