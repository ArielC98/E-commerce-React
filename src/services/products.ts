

export const fetchProducts = async () => {
  // FakeStore API present CORS errors
  // const res = await fetch('https://fakestoreapi.com/products');
  // if (!res.ok) throw new Error('Error al obtener los productos');
  // return res.json();

  //We use DummyJSON for production build
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products; // porque la propiedad es "products"

}