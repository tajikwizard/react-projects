import { useState, useEffect } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setLoading(false);
        setCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (products.length >= 100) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [products]);

  const handleLoadMore = () => {
    fetchData();
  };

  if (loading && products.length === 0) {
    return <div className="h-screen text-center text-3xl">LOADING...</div>;
  }

  return (
    <div className="container mx-auto">
      <h3 className="text-center text-4xl my-8">Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
              <div className="mt-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {product.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {product.brand}
                </span>
              </div>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Price: ${product.price}
              </span>
              {product.discountPercentage && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  Discount: {product.discountPercentage}%
                </span>
              )}
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                Rating: {product.rating}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2">
                Stock: {product.stock}
              </span>
            </div>
          </div>
        ))}
      </div>
      {loading && <div className="text-center my-4">Loading more...</div>}
      {!loading && (
        <div className="text-center my-4">
          <button
            disabled={disableButton}
            onClick={handleLoadMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load more...
          </button>
          {disableButton ? <p>You have reached 100 products...</p> : null}
        </div>
      )}
    </div>
  );
};

export default LoadMoreData;
