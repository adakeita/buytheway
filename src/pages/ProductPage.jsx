import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/api";
import { useCart } from "../contexts/CartContext";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const singleProduct = await fetchProductById(productId);
      setProduct(singleProduct);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <SingleProduct product={product} />
      <div className="BTN-WRAPPER_PRODUCTPAGE">
        <button className="CARTBTN_PRODUCTPAGE flex justify-center
        py-2 rounded shadow-header hover:shadow-xxl hover:bg-logo-green-hover bg-logo-green w-10/12  sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto text-white font-semibold hover:scale-105 transition-all ease-in-out duration-300 mt-4 mb-12" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
