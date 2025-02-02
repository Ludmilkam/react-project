import { LikesContextProvider } from "../context/LikesContext"
import { AppRoutes } from "../routes/Routs"


export function AppComponent(){

    return (
        <div>
            <LikesContextProvider>
                <AppRoutes></AppRoutes>
            </LikesContextProvider>
        </div>
    )
}