import { useState, useEffect } from "react";
import AuthContext from "./context/AuthContext";
import { authService } from "./services/auth";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AddContact from "./pages/Contact/AddContact";
import DisplayContact from "./pages/Contact/DisplayContact";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(() => authService.getCurrentUser());
  const [selectedContact, setSelectedContact] = useState(null); // <-- NEW

  // Navigate and sync
  const navigate = (p) => setPage(p);

  useEffect(() => {
    if (user) setPage("dashboard");
  }, []);

  const login = async (username, password) => {
    const userData = await authService.login(username, password);
    setUser(userData);
    return userData;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {page === "login" && <LoginPage onNavigate={navigate} />}
        {page === "register" && <RegisterPage onNavigate={navigate} />}
        {page === "dashboard" && user && (
          <DashboardPage onNavigate={navigate} />
        )}
        {page === "dashboard" && !user && <LoginPage onNavigate={navigate} />}

        {page === "dashboard" && user && (
          <DisplayContact />
        )}

        <ToastContainer />
      </AuthContext.Provider>
    </>
  );
}
