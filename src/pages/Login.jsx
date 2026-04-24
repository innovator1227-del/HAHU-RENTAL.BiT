import { useNavigate } from "react-router-dom";
import { User, ShieldCheck, UserPlus } from "lucide-react";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 px-4">

            <div className="w-full max-w-2xl rounded-3xl bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl border border-white/10">

                {/* Header */}
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                        Welcome Back
                    </p>

                    <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                        Choose Your Access
                    </h1>

                    <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">
                        Select how you want to continue. Admins manage the platform, users explore and rent cars.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3">

                    {/* User */}
                    <button
                        onClick={() => navigate("/user-login")}
                        className="group rounded-2xl bg-linear-to-r from-blue-600 to-blue-500 px-5 py-5 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03] transition-all duration-300"
                    >
                        <div className="flex flex-col items-center gap-1">
                            <User />
                            User Login
                        </div>
                    </button>

                    {/* Admin */}
                    <button
                        onClick={() => navigate("/admin-login")}
                        className="group rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-500 px-5 py-5 text-sm font-semibold text-white shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.03] transition-all duration-300"
                    >
                        <div className="flex flex-col items-center gap-1">
                            <ShieldCheck />
                            Admin Login
                        </div>
                    </button>

                    {/* Register */}
                    <button
                        onClick={() => navigate("/register")}
                        className="group rounded-2xl bg-white/10 px-5 py-5 text-sm font-semibold text-white border border-white/10 hover:bg-white/20 hover:scale-[1.03] transition-all duration-300"
                    >
                        <div className="flex flex-col items-center gap-1">
                            <UserPlus />
                            Register
                        </div>
                    </button>

                </div>

                {/* Footer */}
                <div className="mt-10 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} HAHU Rentals. All rights reserved.
                </div>

            </div>
        </div>
    );
}