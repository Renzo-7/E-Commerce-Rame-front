function Contact() {
  return (
    <div className="container py-5">
      {/* Texto explicativo */}
      <div className="mb-4 text-center">
        <h2 style={{ color: "#724b23" }}>¿Querés comunicarte con nosotros?</h2>
        <p className="lead">
          Podés contactarnos por correo, visitarnos en nuestra ubicación física
          o escribirnos por WhatsApp. Estamos para ayudarte.
        </p>
      </div>

      {/* Íconos de contacto */}
      <div className="d-flex justify-content-center gap-5 mb-5">
        <a href="mailto:contacto@tumarca.com" className="icon-contact">
          <i className="bi bi-envelope-fill"></i>
        </a>
        <a
          href="https://goo.gl/maps/ubicacion"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-contact"
        >
          <i className="bi bi-geo-alt-fill"></i>
        </a>
        <a
          href="https://wa.me/5492611234567"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-contact"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>

      {/* Formulario */}
      <form className="row g-3 justify-content-center">
        <div className="col-md-8">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="nombre" required />
        </div>
        <div className="col-md-8">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="col-md-8">
          <label htmlFor="telefono" className="form-label">
            Teléfono
          </label>
          <input type="tel" className="form-control" id="telefono" />
        </div>
        <div className="col-8">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            className="form-control"
            id="mensaje"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn-products-card rounded-2">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
