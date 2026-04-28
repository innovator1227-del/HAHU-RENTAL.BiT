import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-slate-950 min-h-screen text-white">
            <Header toggleSidebar={() => setIsOpen(!isOpen)} />
            <div className="flex">
                <AdminSidebar isOpen={isOpen} />
                <main className={`flex-1 transition-all duration-300 ${isOpen ? "md:ml-64" : "md:ml-20"} p-4 pt-20`}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
