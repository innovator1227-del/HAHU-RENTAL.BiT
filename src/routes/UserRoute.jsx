import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserRoute = () => {
    const { user, isAdmin } = useAuth();

    if (!user) {
        return <Navigate to="/user-login" replace />;
    }

    if (isAdmin()) {
        return <Navigate to="/admin" replace />;
    }

    return <Outlet />;
};

export default UserRoute;
