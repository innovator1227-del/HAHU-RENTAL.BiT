import AuthForm from "../components/AuthForm";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLogin = () => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/main" replace />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10">
            <div className="w-full max-w-3xl rounded-4xl bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10 sm:p-10">
                <div className="mb-8 text-center">
                    <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200">
                        Admin Access</span>
                    <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">Admin login for platform management.</h1>
                    <p className="mt-3 mx-auto max-w-2xl text-sm sm:text-base leading-7 text-slate-400">Use your admin account to manage cars, bookings, and user access safely.</p>
                </div>
                <div className="rounded-4xl border border-white/10 bg-slate-950/95 p-6 sm:p-8 shadow-xl shadow-slate-950/30"> <AuthForm title="Admin Login" description="Enter your admin credentials to access the admin dashboard." submitLabel="Sign in as Admin" role="admin" />
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
