function VisualDisplay() {
  const imagenes = [
    "/images/muestra1.jpg",
    "/images/muestra2.jpg",
    "/images/muestra3.jpg",
    "/images/muestra4.jpg",
  ];

  return (
    <section className="container py-5">
      <h2 className="text-start mb-4">Muestra Visual</h2>
      <div className="row justify-content-center">
        {imagenes.map((src, index) => (
          <div key={index} className="col-6 col-md-3" data-aos="zoom-in">
            <img
              src={src}
              alt={`muestra-${index}`}
              className="img-fluid rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisualDisplay;
