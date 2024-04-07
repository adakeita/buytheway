import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const totalCost = cartItems.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);
  

  const handleCheckout = () => {
    navigate("/checkout");
    console.log("Proceeding to checkout...");
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <img src={item.img} alt="item-description" />
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
