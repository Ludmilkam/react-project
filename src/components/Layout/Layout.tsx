import { ReactNode } from "react"
import "./Layout.css"
interface ILayoutProps {
    // children специальное свойство React компонента указывается в props позволяет добавить другие элементы 
    // между открывающим и закрывающим тегом самого компонента 
    children : ReactNode
}


export function Layout(props:ILayoutProps){
    return(
        <div className="Layout">
            {props.children}
        </div>

    )   
}