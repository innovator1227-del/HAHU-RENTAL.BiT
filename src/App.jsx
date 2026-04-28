import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { CarsProvider } from "./context/CarsContext";

import PublicLayout from "./layouts/PublicLayout";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import GuestRoute from "./routes/GuestRoute";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Main from "./components/Main";
import BookingForm from "./pages/BookingForm";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCars from "./pages/AdminCars";
import AdminBookings from "./pages/AdminBookings";
import AdminUsers from "./pages/AdminUsers";
import AdminReports from "./pages/AdminReports";
import AdminSettings from "./pages/AdminSettings";
import UserHistory from "./pages/UserHistory";
import UserCars from "./pages/UserCars";
import UserSubItem from "./pages/UserSubItem";
import UserActive from "./pages/UserActive";
import UserFavorite from "./pages/UserFavorite";
import UserWallet from "./pages/UserWallet";
import UserSupport from "./pages/UserSupport";
import UserPackages from "./pages/UserPackages";
import UserProfile from "./pages/UserProfile";
import UserSettings from "./pages/UserSettings";

const App = () => {
  return (
    <CarsProvider>
      <AuthProvider>
        <Routes>
          <Route element={<GuestRoute />}>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user-login" element={<UserLogin />} />
              <Route path="/admin-login" element={<AdminLogin />} />
            </Route>
          </Route>

          <Route element={<UserRoute />}>
            <Route element={<UserLayout />}>
              <Route path="/main" element={<Main />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/history" element={<UserHistory />} />
              <Route path="/cars" element={<UserCars />} />
              <Route path="/subitem" element={<UserSubItem />} />
              <Route path="/active" element={<UserActive />} />
              <Route path="/favorite" element={<UserFavorite />} />
              <Route path="/wallet" element={<UserWallet />} />
              <Route path="/support" element={<UserSupport />} />
              <Route path="/packages" element={<UserPackages />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/settings" element={<UserSettings />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="cars" element={<AdminCars />} />
              <Route path="bookings" element={<AdminBookings />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="reports" element={<AdminReports />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </CarsProvider>
  );
};

export default App;