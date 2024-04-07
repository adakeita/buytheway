import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const totalCost = cartItems.reduce((total, item) => total + item.discountedPrice, 0);

  const handleCheckout = () => {
    console.log("Processing checkout...");

    clearCart();

    navigate('/checkout-success');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>{item.title} - ${item.discountedPrice}</p>
              </div>
            ))}
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
