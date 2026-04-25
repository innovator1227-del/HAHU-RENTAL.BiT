import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import UserSidebar from "./components/UserSidebar";
import Header from "./components/Header";
import Main from "./components/Main";

import { AuthProvider } from "./context/AuthContext";
import { CarsProvider } from "./context/CarsContext";

// pages
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import BookingForm from "./pages/BookingForm";
import Checkout from "./pages/Checkout";
import AdminRoute from "./routes/AdminRoute";
import Footer from "./components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <CarsProvider>
      <AuthProvider>
        <div className="bg-slate-950 min-h-screen text-white flex flex-col">

          {/* Header */}
          <Header toggleSidebar={() => setIsOpen(!isOpen)} />

          <div className="flex flex-1">
            {/* Sidebar */}
            <UserSidebar isOpen={isOpen} />

            {/* Routes Content */}
            <div
              className="flex-1 p-2 transition-all duration-300 min-h-full"
            >
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/main" element={<Main />} />

                <Route
                  path="/admin"
                  element={
                    <AdminRoute>
                      <AdminDashboard />
                    </AdminRoute>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/user-login" element={<UserLogin />} />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </AuthProvider>
    </CarsProvider>
  );
};

export default App;