import { useEffect, useState } from "react";
import { getProducts } from "../services/api.js";
import { useCart } from "../context/CartContext.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    loadProducts(1);
  }, []);

  const loadProducts = async (page) => {
    try {
      const data = await getProducts(page);
      setProducts(data.products);
      setPagination(data.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="products-cart container mt-4">
      <div className="row">
        {products.map((p) => (
          <div className="col-md-3 mb-3" key={p._id}>
            <div className="card h-100 shadow-sm">
              <img src="/images/aritos1.jpg" alt="" className="card-img-top" />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{p.nombre}</h5>
                  <p className="card-text">{p.descripcion}</p>
                  <p className="card-text">Precio: ${p.precio}</p>
                  <p className="card-text">
                    {p.stock === 0 && (
                      <p className="card-text text-danger">Sin stock</p>
                    )}
                  </p>
                </div>

                {/* Botón agregar al carrito */}
                <button
                  className="btn-products-card mt-2 rounded-2"
                  disabled={p.stock === 0}
                  onClick={() => addToCart(p)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      {pagination && (
        <nav className="mt-3">
          <ul className="pagination justify-content-center">
            {pagination.hasPrevPage && (
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => loadProducts(pagination.prevPage)}
                >
                  Anterior
                </button>
              </li>
            )}

            <li className="page-item disabled">
              <span className="page-link">
                Página {pagination.currentPage} de {pagination.totalPages}
              </span>
            </li>

            {pagination.hasNextPage && (
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => loadProducts(pagination.nextPage)}
                >
                  Siguiente
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ProductList;
