import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAdmin } from "./context/AdminContext.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      once: false, // si querés que se ejecute solo una vez
    });
  }, []);

  function ProtectedRoute({ children }) {
    const { isAdmin } = useAdmin();
    return isAdmin ? children : <Navigate to="/admin/login" />;
  }

  return (
    <AdminProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AdminProvider>
  );
}

export default App;
