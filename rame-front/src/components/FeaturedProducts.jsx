import { useEffect, useState } from "react";
import axios from "axios";

function FeaturedProducts() {
  const [products, setProdcucts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/featured")
      .then((res) => setProdcucts(res.data))
      .catch((err) => console.error("Error al cargar destacados:", err));
  }, []);

  return (
    <section className="container py-5">
      <h2 className="text-start mb-4">Productos Destacados</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <div className="card w-75">
              <img
                src="/images/collar1.jpg"
                className="card-img-top"
                alt={product.nombre}
              />
              <div className="card-body mb-5">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripcion}</p>
                <p className="card-text">${product.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
