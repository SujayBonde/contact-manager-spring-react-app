import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiService } from "../../services/api";

const DashboardPage = ({ onNavigate }) => {
  const { user, logout } = useAuth();
  const [apiResult, setApiResult] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    logout();
    onNavigate("login");
  };

  const callApi = async (type) => {
    setLoading(true);
    setApiResult("");
    setApiError("");
    try {
      const res =
        type === "user"
          ? await apiService.getUserContent()
          : await apiService.getAdminContent();
      setApiResult(res);
    } catch (e) {
      setApiError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const isAdmin = user?.roles?.includes("ROLE_ADMIN");
  const isMod = user?.roles?.includes("ROLE_MODERATOR");

  const roleColor = isAdmin
    ? "text-red-400 bg-red-900/30 border-red-800"
    : isMod
      ? "text-yellow-400 bg-yellow-900/30 border-yellow-800"
      : "text-indigo-400 bg-indigo-900/30 border-indigo-800";

  return (
    <div className="h-fit bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A9 9 0 1118.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="font-bold text-lg">Contact Manager</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm hidden sm:block">
              Hey,{" "}
              <span className="text-white font-semibold">{user?.username}</span>
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300
                hover:text-white text-sm font-medium transition-all border border-slate-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-6 mb-8 border border-indigo-800/50">
          <h2 className="text-2xl font-bold mb-1">
            Welcome back, {user?.username}! 👋
          </h2>
          <p className="text-slate-400 text-sm">
            This is made with ❤️ by sujay
          </p>
        </div>

        {/* User Info Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
              User ID
            </p>
            <p className="text-xl font-bold text-white">#{user?.id}</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
              Email
            </p>
            <p className="text-sm font-medium text-white truncate">
              {user?.email}
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
              Role
            </p>
            <div className="flex flex-wrap gap-2">
              {user?.roles?.map((r) => (
                <span
                  key={r}
                  className={`text-xs font-bold px-2 py-1 rounded-lg border ${roleColor}`}
                >
                  {r.replace("ROLE_", "")}
                </span>
              ))}
            </div>
          </div>
        </div> */}

        {/* <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-8">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Your JWT Token
          </h3>
          <code className="block bg-slate-800 rounded-xl p-4 text-xs text-emerald-400 font-mono break-all leading-relaxed border border-slate-700">
            {user?.token}
          </code>
        </div> */}

        {/* API Testing Panel */}
        {/* <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Test Protected Endpoints
          </h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => callApi("user")}
              disabled={loading}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50
                text-white text-sm font-semibold rounded-xl transition-all"
            >
              GET /api/test/user
            </button>
            {isAdmin && (
              <button
                onClick={() => callApi("admin")}
                disabled={loading}
                className="px-5 py-2.5 bg-red-700 hover:bg-red-600 disabled:opacity-50
                  text-white text-sm font-semibold rounded-xl transition-all"
              >
                GET /api/test/admin
              </button>
            )}
          </div>
          {loading && (
            <p className="text-slate-400 text-sm animate-pulse">
              Calling API...
            </p>
          )}
          {apiResult && (
            <div className="bg-emerald-900/20 border border-emerald-800 rounded-xl p-4">
              <p className="text-emerald-400 text-sm font-mono">
                ✓ {apiResult}
              </p>
            </div>
          )}
          {apiError && (
            <div className="bg-red-900/20 border border-red-800 rounded-xl p-4">
              <p className="text-red-400 text-sm font-mono">✗ {apiError}</p>
            </div>
          )}
        </div> */}
      </main>
    </div>
  );
};

export default DashboardPage;
