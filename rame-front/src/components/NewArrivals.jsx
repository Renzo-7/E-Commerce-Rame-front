import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <section className="mt-5 bg-beige rounded-4 p-4 d-flex flex-column flex-md-row align-items-center justify-content-between container">
      {/* Imágenes */}
      <div className="d-grid gap-3 gallery" data-aos="fade-rigth">
        <img
          src="/images/aritos1.jpg"
          alt="Anillos dorados"
          className="img-fluid rounded big"
        />
        <img
          src="/images/collar2.jpg"
          alt="Anillos trenzados"
          className="img-fluid rounded"
        />
        <img
          src="/images/collar2.jpg"
          alt="Anillos trenzados"
          className="img-fluid rounded"
        />
        <img
          src="/images/aritos1.jpg"
          alt="Anillos dorados"
          className="img-fluid rounded big2"
        />
      </div>

      {/* Texto y botón */}
      <div className="text-center text-md-start mt-4 mt-md-0 ms-md-4 me-5">
        <h2 className="fw-medium" style={{ color: "#5c3d1e" }}>
          Nuevos <br /> ingresos
        </h2>
        <Link to="/products" className="btn btn-beige mt-3">
          Comprar ahora
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
