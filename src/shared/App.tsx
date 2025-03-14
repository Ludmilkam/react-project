import { LikesContextProvider } from "../context/LikesContext";
import { UserContextProvider } from "../context/UserContext";
import { AppRoutes } from "../routes/Routs";

export function AppComponent() {
    return (
        <>
            <UserContextProvider>
                <LikesContextProvider>
                    <AppRoutes></AppRoutes>
                </LikesContextProvider>
            </UserContextProvider>
        </>
    );
}
