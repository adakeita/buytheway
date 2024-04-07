import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import ProductCard from "../components/ProductCard/ProductCard";
import LargeLogo from "../assets/svg/btw-large.svg";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [next, setNext] = useState(0);
  const batchSize = 20;

  useEffect(() => {
    const fetchAllProducts = async () => {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
      setDisplayedProducts(allProducts.slice(0, batchSize));
      setDisplayedProducts(allProducts.slice(0, batchSize));
      setNext(batchSize);
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop <
          document.documentElement.offsetHeight - 100 ||
        products.length === displayedProducts.length
      )
        return;
      loadMoreProducts();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [products, displayedProducts]);

  const loadMoreProducts = () => {
    const nextProducts = products.slice(next, next + batchSize);
    setDisplayedProducts(displayedProducts.concat(nextProducts));
    setNext(next + batchSize);
  };

  return (
    <>
      <section className="greeting_home w-full flex-col flex my-12">
        <div className="header_wrapper_home flex sm:w-1/2 sm:max-w-home-hero-max">
          <img src={LargeLogo} alt="large logo img" />
        </div>
        <p className="greeting-text w-11/12 xl:w-9/12  mx-auto mt-10 mb-6 text-xl leading-10 text-center sm:text-left">
          Welcome to Buy the Way—your go-to e-commerce site for a seamless
          shopping experience.
          <br/>With a wide selection of products, easy
          navigation, and secure checkout, we make finding what you need simple
          and enjoyable. Discover the latest trends and timeless essentials, all
          in one place. Shop with confidence at Buy the Way, where convenience
          meets variety.
        </p>
      </section>
      <h2 className="text-4xl font-bold text-left my-5">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
