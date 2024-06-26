import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import VisaIcon from "../assets/svg/visa.svg";
import PayPalIcon from "../assets/svg/paypal.svg";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const totals = cartItems.reduce(
    (acc, product) => {
      const originalTotal = product.price * product.quantity;
      const discountedTotal = product.discountedPrice
        ? product.discountedPrice * product.quantity
        : originalTotal;
      return {
        original: acc.original + originalTotal,
        discounted: acc.discounted + discountedTotal,
      };
    },
    { original: 0, discounted: 0 }
  );

  const discount = totals.original - totals.discounted;
  const totalCost = totals.discounted;

  const handleConfirmPurchase = () => {
    console.log("Order placed with payment method:", paymentMethod);
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className="CHECKOUT-CONTAINER p-4 w-full max-w-[625px] mx-auto my-6 rounded-md shadow-card bg-white">
      <h1 className="HEADER_CHECKOUT text-3xl font-bold mt-2 mb-10">
        Checkout Confirmation
      </h1>
      <div className="CHECKOUT-DETAILS mx-auto w-11/12">
        <section className="PRODUCTS-REVIEW_SECTION my-10">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <div
                key={product.id}
                className="PRODUCT_CHECKOUT flex justify-between items-center my-6"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <p className="font-bold">
                  $
                  {(
                    (product.discountedPrice ?? product.price) *
                    product.quantity
                  ).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </section>
        <section className="PAYMENT-INFORMATION_SECTION my-10 py-4">
          <h2 className="PAYMENT-HEADER w-full text-2xl font-bold mb-4">
            Payment Information
          </h2>
          <div className="PAYMENT-OPTIONS flex flex-row justify-around">
            <label className="VISA-LABEL flex items-center mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Visa"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "Visa"}
              />
              <img
                src={VisaIcon}
                alt="Visa"
                className=" w-14 h-14 object-cover"
              />
            </label>
            <label className="PAYPAL-LABEL flex items-center mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "PayPal"}
              />
              <img
                src={PayPalIcon}
                alt="PayPal"
                className="w-12 h-12 object-cover"
              />
            </label>
          </div>
        </section>
        <section className="ORDER-SUMMARY_SECTION w-full my-6 mx-auto">
          <div className="SUMMARY-HEADER-WRAPPER">
            <h2 className="SUMMARY-HEADER text-2xl font-bold mb-4">
              Order Summary
            </h2>
          </div>
          <div className="SUMMARY-CONTENT_CHECKOUT flex flex-col text-lg">
            {totals.original > 0 && (
              <div className="RETAIL-TOTAL_CHECKOUT flex flex-row justify-between my-2">
                <p className="mb-2">Retail Total</p>
                <p className="mb-2">${totals.original.toFixed(2)}</p>
              </div>
            )}
            {discount > 0 && (
              <div className="DISCOUNT-TOTAL_CHECKOUT flex flex-row justify-between my-2 font-semibold italic">
                <p className="mb-2 text-red-500">Discount</p>
                <p className="mb-2 text-red-500">-${discount.toFixed(2)}</p>
              </div>
            )}
            <div className="COMPLETE-TOTAL_CHECKOUT flex justify-end w-full my-4 text-xl">
              <p className="font-bold">Total Cost: ${totalCost.toFixed(2)}</p>
            </div>
          </div>
        </section>
        <div className="OPTIONS_CHECKOUT my-6 flex justify-between items-center mt-8">
          <button
            onClick={handleConfirmPurchase}
            className="CONFIRM-BTN_CHECKOUT bg-logo-green hover:bg-logo-green-hover hover:scale-105 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-300"
          >
            Confirm Purchase
          </button>
          <button
            onClick={() => clearCart()}
            className="bg-red-500 hover:bg-red-600 hover:scale-105 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
