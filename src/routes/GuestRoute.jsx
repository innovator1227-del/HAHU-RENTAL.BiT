import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const GuestRoute = () => {
    const { user, isAdmin } = useAuth();

    if (user) {
        return <Navigate to={isAdmin() ? "/admin" : "/main"} replace />;
    }

    return <Outlet />;
};

export default GuestRoute;
