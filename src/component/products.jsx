import React, { useEffect, useState } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");

      const productsData = await data.json();
      // console.log(productsData);
      setProducts(productsData);
    };

    fetchData();
  }, []);

  return (
    <div className="px-6">
      <h1 className="text-2xl px-6 font-bold">New Products</h1>

      <div className="flex flex-wrap ">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border border-black w-56 min-h-56 m-6 hover:border hover:border-red-500 hover:scale-110 "
            >
              <Product productDetails={product} />
            </div>
          ))
        ) : (
          <p> No Product is here </p>
        )}
      </div>
    </div>
  );
};

export default Products;
