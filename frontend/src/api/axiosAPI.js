import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL: "http://localhost:8080",
});

// Attach JWT token to every request
API.interceptors.request.use(
  (config) => {
    // Try to get token from user object first, fallback to token string
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const token = user?.token || localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: handle 401 globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Token may be invalid or expired.");
      // optionally: logout user or redirect
    }
    return Promise.reject(error);
  }
);

// API service methods
export const apiService = {
  getUserContent: async () => {
    const res = await API.get("/api/test/user");
    return res.data;
  },

  getAdminContent: async () => {
    const res = await API.get("/api/test/admin");
    return res.data;
  },

  createContact: async (data) => {
    const res = await API.post("/api/contact/create", data);
    return res.data;
  },

  getContacts: async ()=>{
    const res= await API.get("/api/contact/get-contact");
    return res.data;
  },

  deleteContact: async (id)=>{
    const res= await API.delete(`/api/contact/delete-contact/${id}`);
    return res;
  },

  updateContact: async (id,data)=>{
    const res = await API.put(`/api/contact/update-contact/${id}`,data);
    return res;
  }
};