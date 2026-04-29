import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Car,
    CalendarDays,
    Clock,
    CarFront,
    History,
    Heart,
    Wallet,
    MessageCircle,
    User,
    Settings,
    Package,
    MoreHorizontal,
    ChevronDown
} from "lucide-react";

const UserSidebar = ({ isOpen }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <aside
            className={`min-h-screen bg-slate-900 text-white transition-all duration-500
               ${isOpen ? "w-64" : "w-0 md:w-20"} 
              fixed md:relative z-50`}
        >

            {/* Scrollable Menu */}
            <div className="h-[calc(100%-64px)] overflow-y-auto p-1 space-y-2">


                {/* Dashboard */}
                <NavLink
                    to="/main"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <LayoutDashboard />
                    {isOpen && <span>Dashboard</span>}
                </NavLink>

                {/* booking */}
                <NavLink
                    to="/booking"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <CalendarDays />
                    {isOpen && <span>MY Booking</span>}
                </NavLink>

                {/* history */}
                <NavLink
                    to="/history"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <History />
                    {isOpen && <span>History</span>}
                </NavLink>

                {/* cars */}
                <NavLink
                    to="/cars"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <Car />
                    {isOpen && <span>Cars</span>}
                </NavLink>

                {/* sub-items */}
                <NavLink
                    to="/subitem"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <Clock />
                    {isOpen && <span>sub-item</span>}
                </NavLink>

                {/* active */}
                <NavLink
                    to="/active"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <CarFront />
                    {isOpen && <span>Active</span>}
                </NavLink>

                {/* favorite */}
                <NavLink
                    to="/favorite"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <Heart />
                    {isOpen && <span>Favorite</span>}
                </NavLink>

                {/* wallet */}
                <NavLink
                    to="/wallet"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <Wallet />
                    {isOpen && <span>Wallet</span>}
                </NavLink>

                {/* support */}
                <NavLink
                    to="/support"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <MessageCircle />
                    {isOpen && <span>Support</span>}
                </NavLink>

                {/* packages */}
                <NavLink
                    to="/packages"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"}`
                    }
                >
                    <Package />
                    {isOpen && <span>Packages</span>}
                </NavLink>

                {/* Dropdown */}
                <div>
                    <button
                        onClick={() => setOpenDropdown(!openDropdown)}
                        className="flex items-center justify-between w-full p-2 hover:bg-slate-800 rounded transition"
                    >
                        <div className="flex items-center gap-3">
                            <MoreHorizontal size={18} />
                            {isOpen && <span>More</span>}
                        </div>

                        {isOpen && (
                            <ChevronDown
                                className={`transition-transform duration-300 ${openDropdown ? "rotate-180 opacity-100" : "rotate-0 opacity-50"
                                    }`}
                            />
                        )}
                    </button>

                    {/* Dropdown content */}
                    <div
                        className={`ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-900 ${openDropdown && isOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-100"
                            }`}
                    >
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition-all duration-500 ${isActive ? "bg-slate-800" : "hover:text-gray-300"} ${openDropdown && isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`
                            }
                        >
                            <User size={18} />
                            Profile
                        </NavLink>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition-all duration-500 ${isActive ? "bg-slate-800" : "hover:text-gray-300"} ${openDropdown && isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`
                            }
                        >
                            <Settings size={18} />
                            Settings
                        </NavLink>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default UserSidebar;