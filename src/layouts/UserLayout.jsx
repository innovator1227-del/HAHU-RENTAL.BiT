import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import UserSidebar from "../components/UserSidebar";
import Footer from "../components/Footer";

const UserLayout = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-slate-950 min-h-screen text-white flex flex-col">
            <Header toggleSidebar={() => setIsOpen(!isOpen)} />
            <div className="flex flex-1">
                <UserSidebar isOpen={isOpen} />
                <main className="flex-1 p-2 transition-all duration-300 min-h-full md:ml-20">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default UserLayout;
