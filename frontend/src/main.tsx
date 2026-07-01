import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import ScrollToTop from "@components/ScrollToTop";
import App from "@/App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
