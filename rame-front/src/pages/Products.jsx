import ProductList from "../components/ProductList.jsx";

function Products() {
  return (
    <>
      <div className="navbar-wrapper mt-5 container">
        <nav className="products-navbar container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <button className="btn-products rounded-2">
                Todos los productos
              </button>
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
                  <a className="dropdown-item" href="#">
                    Abridores
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Aros
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Anillos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cadenas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pulseras
                  </a>
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
                  <a className="dropdown-item" href="#">
                    Aros
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Anillos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cadenas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pulseras
                  </a>
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
                  <a className="dropdown-item" href="#">
                    Aros
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Anillos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cadenas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pulseras
                  </a>
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
                  <a className="dropdown-item" href="#">
                    Billeteras
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Carteras
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link item-simple" href="#">
                Relojes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link item-simple" href="#">
                Complementos
              </a>
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
