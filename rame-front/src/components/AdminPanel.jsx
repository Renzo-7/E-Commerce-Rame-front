import { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    categoria: "",
    subcategoria: "",
    imagen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "rame_preset"); // tu preset
    data.append("folder", "productos");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/renzo-dev/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const fileData = await res.json();
    setFormData({ ...formData, imagen: fileData.secure_url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/products", formData, {
        withCredentials: true,
      });
      alert("Producto agregado ✅");
    } catch (err) {
      alert("Error al agregar producto ❌");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Panel de administración</h2>
      <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
        <div className="col-md-4">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-5">
          <label className="form-label">Categoría</label>
          <select
            className="form-select"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="Plata">Plata</option>
            <option value="Acero blanco">Acero blanco</option>
            <option value="Acero dorado">Acero dorado</option>
            <option value="Marroquinería">Marroquinería</option>
            <option value="Relojes">Relojes</option>
            <option value="Complementos">Complementos</option>
          </select>
        </div>

        <div className="col-md-5">
          <label className="form-label">Subcategoría</label>
          <select
            className="form-select"
            name="subcategoria"
            value={formData.subcategoria}
            onChange={handleChange}
          >
            <option value="">Seleccionar subcategoría</option>
            {formData.categoria === "Plata" && (
              <>
                <option value="Abridores">Abridores</option>
                <option value="Aros">Aros</option>
                <option value="Anillos">Anillos</option>
                <option value="Cadenas">Cadenas</option>
                <option value="Pulseras">Pulseras</option>
              </>
            )}
            {formData.categoria === "Acero blanco" && (
              <>
                <option value="Aros">Aros</option>
                <option value="Anillos">Anillos</option>
                <option value="Cadenas">Cadenas</option>
                <option value="Pulseras">Pulseras</option>
              </>
            )}
            {formData.categoria === "Acero dorado" && (
              <>
                <option value="Aros">Aros</option>
                <option value="Anillos">Anillos</option>
                <option value="Cadenas">Cadenas</option>
                <option value="Pulseras">Pulseras</option>
              </>
            )}
            {formData.categoria === "Marroquinería" && (
              <>
                <option value="Billeteras">Billeteras</option>
                <option value="Carteras">Carteras</option>
              </>
            )}
          </select>
        </div>

        <div className="col-10">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            name="descripcion"
            rows="3"
            value={formData.descripcion}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-md-10">
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {formData.imagen && (
            <img
              src={formData.imagen}
              alt="Vista previa"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                marginTop: "10px",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-products-card">
            Agregar producto
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPanel;
