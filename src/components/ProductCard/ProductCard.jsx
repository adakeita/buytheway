import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const imageUrl =
    product.imageUrl ||
    "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  return (
    <div
      className="PRODUCTCARD-CONTAINER h-full p-2 my-2 group block cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg bg-white"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />
      <div className="productcard-text h-1/6 m-auto my-4 flex flex-col justify-between text-sm w-11/12">
        <div className="title-price_productcard mb-2 flex flex-row items-center justify-between">
          <h3 className="product-title text-lg text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {product.title}
          </h3>
          <p className="price-p_productcard text-gray-900 text-lg font-bold">
            ${product.discountedPrice || product.price}
          </p>
        </div>
        <div className="product-desc-wrapper_producard">
          <p className="product-desc_productcard mt-1.5 text-base w-full text-gray-500">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
