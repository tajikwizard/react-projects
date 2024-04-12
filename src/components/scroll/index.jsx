import { useState, useEffect } from "react";

const Scroll = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [scroll, setScroll] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError("An error occurred while fetching products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="products flex flex-col w-8/12 m-auto ">
      <h2 className="text-2xl font-bold mb-4 text-center underline ">
        Products
      </h2>
      <div className="scroll-indicator fixed top-0 left-0 w-full bg-gray-200 h-2">
        <div
          className="indicator bg-blue-500 h-full"
          style={{
            width: `${
              (scroll / (document.body.scrollHeight - window.innerHeight)) * 100
            }%`,
          }}
        ></div>
      </div>
      {loading && (
        <p className="text-center  text-3xl flex justify-center items-center h-screen">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-center  text-3xl flex justify-center items-center h-screen">
          {error}
        </p>
      )}
      <div className="grid grid-cols-1 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
