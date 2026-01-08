import axios from "axios";

// This automatically selects the right URL:
// 1. If you defined a VITE_API_URL in .env (for deployment), it uses that.
// 2. Otherwise, it defaults to localhost:8000 (for your computer).
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
});

export default api;