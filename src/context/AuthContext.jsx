import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
const AUTH_USER_KEY = "authUser";
const USERS_KEY = "users";
const defaultUsers = [
    { email: "admin@gmail.com", password: "1234", role: "admin" },
];

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem(USERS_KEY);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
            setUsers(defaultUsers);
        }

        const storedUser = localStorage.getItem(AUTH_USER_KEY);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const saveUsers = (nextUsers) => {
        setUsers(nextUsers);
        localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));
    };

    const login = (email, password, role) => {
        const normalizedEmail = email.trim().toLowerCase();
        const foundUser = users.find(
            (item) =>
                item.email === normalizedEmail &&
                item.password === password &&
                item.role === role
        );

        if (!foundUser) {
            return { success: false, error: "Email, password, or role is incorrect." };
        }

        const authUser = { email: foundUser.email, role: foundUser.role };
        setUser(authUser);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authUser));
        return { success: true };
    };

    const register = ({ email, password, role = "user" }) => {
        const normalizedEmail = email.trim().toLowerCase();
        const emailTaken = users.some((item) => item.email === normalizedEmail);

        if (emailTaken) {
            return { success: false, error: "That email is already registered." };
        }

        const newUser = { email: normalizedEmail, password, role };
        const nextUsers = [...users, newUser];
        saveUsers(nextUsers);

        const authUser = { email: normalizedEmail, role };
        setUser(authUser);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authUser));

        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(AUTH_USER_KEY);
    };

    const isAdmin = () => user?.role === "admin";

    return (
        <AuthContext.Provider value={{ user, users, login, logout, register, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
