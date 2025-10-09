import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container py-4 border-top">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Frase a la izquierda */}
          <div className="col-md-4 mb-3 mb-md-0">
            <p className="mb-0" style={{ color: "#724b23" }}>
              “Donde la elegancia se convierte en esencia.”
            </p>
          </div>

          {/* Logo centrado */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <Link to="/">
              <img
                src="/images/rame-logo-2.png"
                alt="Logo"
                className="footer-logo"
              />
            </Link>
          </div>

          {/* Redes y ubicación a la derecha */}
          <div className="col-md-4 d-flex justify-content-md-end justify-content-center gap-3">
            <a
              href="https://www.instagram.com/tumarca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram fs-4 icons-color"></i>
            </a>
            <a
              href="https://www.facebook.com/tumarca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook fs-4 icons-color"></i>
            </a>
            <a
              href="https://goo.gl/maps/ubicacion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-geo-alt fs-4 icons-color"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp fs-4 icons-color"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-envelope fs-4 icons-color"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
