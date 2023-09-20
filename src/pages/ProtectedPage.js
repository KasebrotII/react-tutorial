import { Navigate } from "react-router-dom";

export const ProtectedPage = () => {
    const isAuthenticated = false;
    return isAuthenticated 
    ? (
        <h1>Only authenticated users should be able to see this!</h1>
    ) : (
        <Navigate to="/" />
    );
} 