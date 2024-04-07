import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const CartSidePanel = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  const totalCost = cartItems.reduce(
    (total, item) =>
      total + (item.discountedPrice || item.price) * item.quantity,
    0
  );

  const panelClasses = isOpen
    ? "transform translate-x-0"
    : "transform translate-x-full";

  return (
    <div
      className={`side-cart fixed right-0 top-0 w-72 h-full bg-white shadow-md p-4 transition-transform duration-300 ${panelClasses}`}
    >
      <div className="CLOSE-CART-WRAPPER flex justify-end mb-4">
        <button className="CLOSE-CART-BTN" onClick={onClose}>
          Close
        </button>
      </div>
      <h2 className="CART-HEADER text-lg font-semibold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="CART-WRAPPER">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="CART-ITEM flex flex-col mb-4 items-center"
            >
              <div className="ITEM-DETAILS w-full flex flex-row items-center mb-2">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="IMG_SIDECART w-12 h-12 mr-2"
                />
                <div className="TITLE-PRICE_SIDECART flex flex-col flex-grow">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>
                    ${item.discountedPrice || item.price} x {item.quantity}
                  </p>
                </div>
                <div className="QUANTITY-WRAPPER flex flex-col items-center justify-center font-bold mx-2 text-lg">
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="PLUS-BTN"
                  >
                    +
                  </button>
                  <button className="MINUS-BTN" onClick={() => decrementQuantity(item.id)}>-</button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-red-600 flex justify-start items-center w-full hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="total-cost mt-4 font-bold">
            Total Cost: ${totalCost.toFixed(2)}
          </div>
          <div className="mt-4 flex justify-between">
            <Link to="/cart" className="text-blue-500 hover:text-blue-700">
              View Cart
            </Link>
            <Link to="/checkout" className="text-blue-500 hover:text-blue-700">
              Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartSidePanel;
