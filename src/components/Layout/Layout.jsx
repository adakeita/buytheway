import { useState, useEffect } from "react";
import { fetchProductsBySearchTerm } from "../../utils/api";
import { useCart } from "../../contexts/CartContext";
import Header from "../Header";
import Footer from "../Footer";
import CartSidePanel from "../CartSidePanel/CartSidePanel";
import SearchOverlay from "../SearchOverlay/SearchOverlay";
import useDebounce from "../../hooks/useDebounce";

const Layout = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isCartOpen, setIsCartOpen } = useCart();
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchProductsBySearchTerm(debouncedSearchTerm)
        .then(setSearchResults)
        .catch(console.error);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="layout-container">
      <Header toggleCart={toggleCart} onSearchChange={setSearchTerm} />
      {searchTerm && (
        <SearchOverlay
          searchTerm={searchTerm}
          searchResults={searchResults}
          onClose={() => setSearchTerm("")}
        />
      )}
      <div className="PAGE-CONTAINER">{children}</div>
      <CartSidePanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </div>
  );
};

export default Layout;
