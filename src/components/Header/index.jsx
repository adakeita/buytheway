import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import SmallLogo from "../../assets/svg/btw-small.svg";
import CartIcon from "../../assets/svg/shopping-cart.svg";

const Header = ({ onSearchChange, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="HEADER-CONTAINER bg-page-bg py-2">
      <div className="HEADER-CONTENT flex flex-col sm:flex-row items-center justify-between w-11/12 mx-auto">
        <div className="LOGO-MENU-BTN-WRAPPER flex items-center justify-between mt-2 mb-4 w-full sm:w-2/3 sm:max-w-logomax">
          <div className="LOGO-WRAPPER w-1/3 sm:w-2/3">
            <Link to="/" className="LOGO-LINK flex items-center">
              <img src={SmallLogo} alt="Logo" className="LOGO-IMG" />
            </Link>
          </div>
          {/* Hamburger Button */}
          <button
            className="HAMBURGER-BTN sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="HAMBURGER-ICON h-9 w-9 items-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Screen size >= 640px && isMenuOpen*/}
        <div
          className={`MENU-CONTENT-WRAPPER py-4 sm:py-0 sm:w-full flex-col sm:flex-row sm:items-center sm:justify-center ${
            isMenuOpen ? "flex" : "hidden sm:flex"
          } w-full sm:w-auto`}
        >
          <div className="SEARCH-CART-WRAPPER h-full flex flex-row w-full sm:w-8/12 justify-around items-center py-2 sm:py-0 mb-4 sm:mb-0 transition-all ease-in-out sm:max-w-search-cart-max sm:justify-between md:max-w-lg-search-cart-max">
            <div className="SEARCHBAR-WRAPPER flex w-3/5 sm:w-4/5">
              <input
                type="search"
                placeholder="Search..."
                onChange={(e) => onSearchChange(e.target.value)}
                className="SEARCHBAR p-2 border border-gray-300 rounded-lg block w-full sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-logo-green focus:border-transparent transition-all ease-in-out duration-300 shadow-header hover:scale-105"
              />
            </div>
            <div className="CARTBTN-WRAPPER relative flex w-1/6 h-full justify-center sm:w-2/6 md:w-1/6 shadow-header rounded">
              <button
                onClick={toggleCart}
                className="CARTBTN w-full flex items-center justify-center h-10 sm:mb-0 text-white bg-logo-green hover:bg-logo-green-hover transition-all ease-in-out duration-300 py-1 px-4 rounded hover:scale-105"
              >
                <img className="CART-ICON h-full " src={CartIcon} alt="Cart Icon"  />
                {totalItems > 0 && (
                  <span className="QUANTITY-COUNTER absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-sM font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="NAVLINKS-WRAPPER flex justify-start flex-col sm:flex-row w-auto sm:w-1/3 sm:justify-center">
            <Link
              to="/contact"
              className="NAVLINK_HEADER flex w-auto text-black hover:text-logo-green-hover mb-4 sm:mb-0 text-center sm:text-left"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
