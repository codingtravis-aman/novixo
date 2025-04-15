import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Router } from "wouter";

// Get the base URL from Vite's environment variables
const base = import.meta.env.BASE_URL || '/';

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Router base={base}>
      <App />
    </Router>
  </QueryClientProvider>
);
