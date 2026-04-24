import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/AuthContext";

const Register = () => {
    const { register } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-8">
            <div className="w-full max-w-md">
                <AuthForm
                    title="Create an account"
                    description="Register a new user account to access the app."
                    submitLabel="Register"
                    role="user"
                    onSubmit={({ email, password, role }) => register({ email, password, role })}
                />

                <div className="mt-4 text-center text-sm text-slate-400">
                    Already registered?{' '}
                    <Link to="/login" className="font-medium text-white hover:text-blue-300">
                        Login here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
