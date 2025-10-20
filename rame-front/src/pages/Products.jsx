import ProductList from "../components/ProductList.jsx";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="navbar-wrapper mt-5 container">
        <nav className="products-navbar container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="btn-products rounded-2" to="/products">
                Todos los productos
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-products"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Plata
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Plata&subcategory=Abridores"
                  >
                    Abridores
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Plata&subcategory=Aros"
                  >
                    Aros
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Plata&subcategory=Anillos"
                  >
                    Anillos
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Plata&subcategory=Cadenas"
                  >
                    Cadenas
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Plata&subcategory=Pulseras"
                  >
                    Pulseras
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-products"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Acero blanco
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Acero blanco&subcategory=Aros"
                  >
                    Aros
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Acero blanco&subcategory=Anillos"
                  >
                    Anillos
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Acero blanco&subcategory=Cadenas"
                  >
                    Cadenas
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Acero blanco&subcategory=Pulseras"
                  >
                    Pulseras
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-products"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Acero dorado
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Acero dorado&subcategory=Aros"
                  >
                    Aros
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Acero dorado&subcategory=Anillos"
                  >
                    Anillos
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Acero dorado&subcategory=Cadenas"
                  >
                    Cadenas
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Acero dorado&subcategory=Pulseras"
                  >
                    Pulseras
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-products"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Marroquinería
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Marroquineria&subcategory=Billeteras"
                  >
                    Billeteras
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products?category=Marroquineria&subcategory=Carteras"
                  >
                    Carteras
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link item-simple"
                to="/products?category=Relojes"
              >
                Relojes
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link item-simple"
                to="/products?category=Complementos"
              >
                Complementos
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-4">
        <ProductList />
      </div>
    </>
  );
}
export default Products;
