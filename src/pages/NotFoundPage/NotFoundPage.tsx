import { useTitle } from "../../hooks/useTitle";

export function NotFoundPage() {
    useTitle("Not Found Page");
    return (
        <div>
            <h1>404</h1>
            <h3>Not Found</h3>
        </div>
    );
}
