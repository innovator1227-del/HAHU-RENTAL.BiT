import { useState } from "react";
import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    Car,
    Users,
    BookOpen,
    Settings,
    BarChart3,
    ChevronDown,
    Menu,
} from "lucide-react";

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <aside
            className={`min-h-screen bg-slate-900 text-white transition-all duration-300 overflow-hidden fixed inset-y-0 left-0 z-50 ${isOpen ? "w-64" : "w-0 md:w-20"}`}
        >
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                        A
                    </div>
                    {isOpen && <span className="font-semibold">Admin Panel</span>}
                </div>

                <button onClick={toggleSidebar} className="cursor-pointer">
                    <Menu />
                </button>
            </div>

            <nav className="mt-4 px-2 space-y-1">
                <Link
                    to="/admin"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-slate-800 transition"
                >
                    <LayoutDashboard />
                    {isOpen && <span>Dashboard</span>}
                </Link>

                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm hover:bg-slate-800 transition"
                >
                    <span className="flex items-center gap-3">
                        <Car />
                        {isOpen && <span>Cars</span>}
                    </span>
                    {isOpen && <ChevronDown className={`transition-transform ${openMenu ? "rotate-180" : "rotate-0"}`} />}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openMenu && isOpen ? "max-h-40" : "max-h-0"}`}>
                    <Link
                        to="/admin/cars"
                        className="flex items-center gap-2 rounded-xl px-8 py-2 text-sm text-slate-300 hover:bg-slate-800 transition"
                    >
                        <span>Manage Cars</span>
                    </Link>
                    <Link
                        to="/admin/bookings"
                        className="flex items-center gap-2 rounded-xl px-8 py-2 text-sm text-slate-300 hover:bg-slate-800 transition"
                    >
                        <span>Bookings</span>
                    </Link>
                </div>

                <Link
                    to="/admin/users"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-slate-800 transition"
                >
                    <Users />
                    {isOpen && <span>Users</span>}
                </Link>

                <Link
                    to="/admin/bookings"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-slate-800 transition"
                >
                    <BookOpen />
                    {isOpen && <span>Rentals</span>}
                </Link>

                <Link
                    to="/admin/reports"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-slate-800 transition"
                >
                    <BarChart3 />
                    {isOpen && <span>Reports</span>}
                </Link>

                <Link
                    to="/admin/settings"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-slate-800 transition"
                >
                    <Settings />
                    {isOpen && <span>Settings</span>}
                </Link>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
