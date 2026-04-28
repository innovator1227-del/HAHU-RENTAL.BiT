import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = () => {
    const { user, isAdmin } = useAuth();

    if (!user) {
        return <Navigate to="/admin-login" replace />;
    }

    if (!isAdmin()) {
        return <Navigate to="/main" replace />;
    }

    return <Outlet />;
};

export default AdminRoute;