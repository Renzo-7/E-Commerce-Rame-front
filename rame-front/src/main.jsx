import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ estilos de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ scripts (navbar, modals, etc.)
import "./css/NewArrivals.css";
import "./css/ProductsNavbar.css";
import "./css/Navbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
