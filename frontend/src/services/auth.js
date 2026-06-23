const API_BASE = "http://localhost:8080/api";

export const authService = {
  login: async (username, password) => {
    const res = await fetch(`${API_BASE}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    // 🔥 FIX: store token separately
    localStorage.setItem("token", data.token);

    // keep user as well
    localStorage.setItem("user", JSON.stringify(data));

    return data;
  },

  register: async (username, email, password) => {
    const res = await fetch(`${API_BASE}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");
    return data;
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },

  getCurrentUser: () => JSON.parse(localStorage.getItem("user") || "null"),
};
