import AuthForm from "../components/AuthForm";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserLogin = () => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/main" replace />;
    }

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),transparent_20%),#020617] px-4 py-10">
            <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-4xl bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/50 ring-1 ring-white/10 sm:p-10">
                <div className="space-y-3 text-center sm:text-left">
                    <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">User access</span>
                    <h1 className="text-4xl font-semibold text-white">Sign in to continue booking your next ride.</h1>
                    <p className="max-w-2xl text-sm leading-7 text-slate-400">Use your account to explore cars, review offers, and complete secure rentals.</p>
                </div>

                <div className="rounded-4xl border border-white/10 bg-slate-900/95 p-6 shadow-xl shadow-slate-950/40">
                    <AuthForm
                        title="User Login"
                        description="Sign in as a user to browse the app and access user content."
                        submitLabel="Sign in as User"
                        role="user"
                    />

                    <div className="mt-5 text-center text-sm text-slate-400">
                        Don’t have an account?{' '}
                        <Link to="/register" className="font-medium text-white hover:text-blue-300">
                            Register here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
