import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems, removeProduct, clear, total } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src="/images/rame-logo.png" alt="Logo" height={70} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>

            {/* Dropdown carrito */}
            <li className="nav-item dropdown">
              <button
                className="btn position-relative dropdown-toggle"
                id="cartDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                  </span>
                )}
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end p-3"
                style={{ minWidth: "300px" }}
              >
                {cartItems.length === 0 ? (
                  <li>El carrito está vacío</li>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <li
                        key={item.productId._id}
                        className="d-flex justify-content-between align-items-center mb-2"
                      >
                        <div>
                          {item.productId.nombre} x {item.quantity}
                          <br />
                          <small>${item.productId.precio}</small>
                        </div>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeProduct(item.productId._id)}
                        >
                          X
                        </button>
                      </li>
                    ))}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="d-flex justify-content-between fw-bold mb-2">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <button className="btn btn-success btn-sm">Pagar</button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={clear}
                      >
                        Vaciar
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
