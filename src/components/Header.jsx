import { Menu, Search, User, LogIn, UserPlus, Shield, LogOut, ArrowLeft } from "lucide-react";
import Logo from "../assets/car.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {

    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="sticky top-0 flex items-center justify-between bg-slate-900 text-white px-4 py-3 shadow-md z-50">

            {/* Left: Logo + Back + Menu + Title */}
            <div className="flex items-center gap-3 rounded-full">
                <img src={Logo} alt="car" className="w-8 h-8 object-contain rounded-full" />

                <button onClick={() => navigate(-1)} className="cursor-pointer hover:bg-slate-800 p-1 rounded">
                    <ArrowLeft size={18} />
                </button>

                <button onClick={toggleSidebar} className="cursor-pointer">
                    <Menu />
                </button>

                <h1 className="font-bold text-sm md:text-lg">HAHU Rentals</h1>
            </div>


            {/* Center: Search */}
            <div className="hidden md:flex items-center bg-slate-800 px-3 py-1 rounded-md">
                <Search size={18} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none ml-2 text-sm"
                />
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                {!user ? (
                    <>
                        <button
                            onClick={() => navigate("/login")}
                            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm transition-colors"
                        >
                            <LogIn size={16} />
                            <span className="hidden sm:inline">Login</span>
                        </button>
                        <button
                            onClick={() => navigate("/register")}
                            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm transition-colors"
                        >
                            <UserPlus size={16} />
                            <span className="hidden sm:inline">Register</span>
                        </button>
                    </>
                ) : (
                    <>
                        {isAdmin() && (
                            <button
                                onClick={() => navigate("/admin")}
                                className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm transition-colors"
                            >
                                <Shield size={16} />
                                <span className="hidden sm:inline">Admin</span>
                            </button>
                        )}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm transition-colors"
                        >
                            <LogOut size={16} />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </>
                )}
                <User className="ml-2" />
            </div>
        </header>
    );
}
export default Header