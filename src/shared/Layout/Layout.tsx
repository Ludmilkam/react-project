import { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { Main } from "../../pages/MainPage/Main"
import { Footer } from '../Footer/Footer'
import { Header } from "../Header/Header"

import "./Layout.css"
interface ILayoutProps {
    // children специальное свойство React компонента указывается в props позволяет добавить другие элементы 
    // между открывающим и закрывающим тегом самого компонента 
    children? : ReactNode
}


export function Layout(props:ILayoutProps){
    return(
        <div className="Layout">
            <Header></Header>
            <Main><Outlet></Outlet></Main>
            <Footer></Footer>
            {props.children}
        </div>

    )   
}