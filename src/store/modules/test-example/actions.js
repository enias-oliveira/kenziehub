//EXAMPLE

export const addToCart = (product) => ({
  type: "@cart/ADD",
  product,
});

export const removeFromCart = (id) => ({
  type: "@cart/REMOVE",
  id,
});
