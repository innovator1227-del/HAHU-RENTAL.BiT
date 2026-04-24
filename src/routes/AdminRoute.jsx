import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
    const { user, isAdmin } = useAuth();

    if (!user) {
        return <Navigate to="/admin-login" replace />;
    }

    if (!isAdmin()) {
        return <Navigate to="/" replace />; // normal user goes home
    }

    return children;
};

export default AdminRoute;