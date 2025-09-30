export const getProducts = async (page = 1, limit = 10) => {
  const res = await fetch(
    `http://localhost:8080/api/products?page=${page}&limit=${limit}`
  );
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json(); // { products, pagination }
};

export const getOrCreateCart = async () => {
  let cartId = localStorage.getItem("cartId");

  if (!cartId) {
    // Crear nuevo carrito
    const res = await fetch("http://localhost:8080/api/carts", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Error al crear el carrito");

    const data = await res.json();
    cartId = data._id;
    localStorage.setItem("cartId", cartId);
  } else {
    // Verificar que el carrito existe en la base de datos
    const res = await fetch(`http://localhost:8080/api/carts/${cartId}`);
    if (!res.ok) {
      // Si el carrito no existe, crear uno nuevo
      const newRes = await fetch("http://localhost:8080/api/carts", {
        method: "POST",
      });

      if (!newRes.ok) throw new Error("Error al crear el carrito");

      const newData = await newRes.json();
      cartId = newData._id;
      localStorage.setItem("cartId", cartId);
    }
  }

  return cartId;
};

export const addProductToCart = async (productId, quantity = 1) => {
  const cartId = await getOrCreateCart();
  const res = await fetch(
    `http://localhost:8080/api/carts/${cartId}/products`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    }
  );
  return await res.json();
};

export const fetchCart = async () => {
  const cartId = await getOrCreateCart();
  const res = await fetch(`http://localhost:8080/api/carts/${cartId}`);
  return await res.json();
};

export const removeProductFromCart = async (productId) => {
  const cartId = localStorage.getItem("cartId");
  const res = await fetch(
    `http://localhost:8080/api/carts/${cartId}/products`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    }
  );
  if (!res.ok) throw new Error("Error al eliminar producto");
  return await res.json();
};

export const clearCart = async () => {
  const cartId = localStorage.getItem("cartId");
  const res = await fetch(`http://localhost:8080/api/carts/${cartId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al vaciar carrito");
  return await res.json();
};
