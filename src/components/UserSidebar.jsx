import { useState } from "react";
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
            {/* Logo (fixed) */}
            <div className="bg-slate-900 p-4 font-bold text-lg border-b">
                HAHU Rentals
            </div>

            {/* Scrollable Menu */}
            <div className="h-[calc(100%-64px)] overflow-y-auto p-1 space-y-2">


                {/* Dashboard */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <LayoutDashboard />
                    {isOpen && <span>Dashboard</span>}
                </div>

                {/*booking */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <CalendarDays />
                    {isOpen && <span>MY Booking</span>}
                </div>
                {/*history */}

                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <History />
                    {isOpen && <span>History</span>}
                </div>

                {/* cars */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <Car />
                    {isOpen && <span>Cars</span>}
                </div>

                {/* sub-items */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <Clock />
                    {isOpen && <span>sub-item</span>}
                </div>

                {/* Active */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <CarFront />
                    {isOpen && <span>Active</span>}
                </div>

                {/* favorite */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <Heart />
                    {isOpen && <span>Favorite</span>}
                </div>

                {/* wallet */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <Wallet />
                    {isOpen && <span>Wallet</span>}
                </div>

                {/* support */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <MessageCircle />
                    {isOpen && <span>Support</span>}
                </div>

                {/* Cars */}
                <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                    <Package />
                    {isOpen && <span>Cars</span>}
                </div>

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
                        <div
                            className={`flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-all duration-500 ${openDropdown && isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                }`}
                        >
                            <User size={18} />
                            Profile
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-all duration-500 ${openDropdown && isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                }`}
                        >
                            <Settings size={18} />
                            Settings
                        </div>
                    </div>
                </div>

            </div>
        </aside>
    );
}

export default UserSidebar;