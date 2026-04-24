import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const AuthForm = ({
    title,
    description,
    submitLabel,
    role,
    onSubmit,
    onSuccessNavigate = "/main",
    showGoogle = true,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError("");
        setIsSubmitting(true);

        const normalizedEmail = email.trim().toLowerCase();
        const result = onSubmit
            ? await onSubmit({ email: normalizedEmail, password, role })
            : await login(normalizedEmail, password, role);

        setIsSubmitting(false);

        if (!result.success) {
            setError(result.error || "Invalid email or password.");
            return;
        }

        navigate(onSuccessNavigate);
    };

    const handleGoogleContinue = () => {
        navigate(onSuccessNavigate);
    };

    return (
        <div className="w-full max-w-md rounded-4xl bg-slate-900/95 p-8 shadow-2xl ring-1 ring-white/10 border border-white/10 backdrop-blur-sm">
            <div className="mb-7">
                <h2 className="text-3xl font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>

            {error && (
                <div className="mb-4 rounded-2xl bg-red-600/20 px-4 py-3 text-sm text-red-100">
                    {error}
                </div>
            )}

            <label className="block mb-4">
                <span className="text-sm text-slate-300">Email</span>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
            </label>

            <label className="block mb-6">
                <span className="text-sm text-slate-300">Password</span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
            </label>

            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-linear-to-r from-blue-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {isSubmitting ? "Processing..." : submitLabel}
            </button>

            {showGoogle && (
                <div className="mt-5">
                    <div className="relative mb-5 text-center text-xs uppercase tracking-[0.35em] text-slate-500">
                        <span className="relative z-10 bg-slate-900 px-3">or continue with</span>
                        <div className="absolute inset-x-0 top-1/2 h-px bg-slate-700" />
                    </div>

                    <button
                        onClick={handleGoogleContinue}
                        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                    >
                        <Zap size={16} />
                        Continue with Google
                    </button>
                </div>
            )}

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>Secure access</span>
                <span className="flex items-center gap-1">
                    <ArrowRight size={14} />
                    Powered by Tailwind UI style
                </span>
            </div>
        </div>
    );
};

export default AuthForm;
