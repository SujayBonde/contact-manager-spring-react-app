const API_BASE = "http://localhost:8080/api";

export const apiService = {
  authHeader: () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return user?.token ? { Authorization: `Bearer ${user.token}` } : {};
  },
  getUserContent: async () => {
    const res = await fetch(`${API_BASE}/test/user`, {
      headers: apiService.authHeader(),
    });
    if (!res.ok) throw new Error("Access denied");
    return res.text();
  },
  getAdminContent: async () => {
    const res = await fetch(`${API_BASE}/test/admin`, {
      headers: apiService.authHeader(),
    });
    if (!res.ok) throw new Error("Access denied");
    return res.text();
  },
};
