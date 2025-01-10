import { useEffect, useState } from "react";

export default function MenuProducts() {
  const [products, setProducts] = useState([]);
  const [eatery, setEatery] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchEatery = async () => {
      try {
        const response = await fetch("/api/eatery");
        const data = await response.json();
        setEatery(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchEatery();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Our Coffee Menu
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={product.img || "/placeholder.jpg"}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 text-gray-700">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Our Main Food Menu
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eatery.map((eatery) => (
            <div key={eatery.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={eatery.img || "/placeholder.jpg"}
                alt={eatery.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {eatery.name}
              </h3>
              <p className="mt-2 text-gray-700">{eatery.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  Rp {eatery.price.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
