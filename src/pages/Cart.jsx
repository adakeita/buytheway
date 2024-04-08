import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();
  const navigate = useNavigate();

  // Calculate totals and including discounts
  const totals = cartItems.reduce(
    (acc, product) => {
      const originalPriceTotal = product.price * product.quantity;
      const discountedPriceTotal = product.discountedPrice
        ? product.discountedPrice * product.quantity
        : originalPriceTotal;
      acc.originalTotal += originalPriceTotal;
      acc.discountedTotal += discountedPriceTotal;
      return acc;
    },
    { originalTotal: 0, discountedTotal: 0 }
  );

  const discountTotal = totals.originalTotal - totals.discountedTotal;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="CARTPAGE-CONTAINER py-4 w-full mx-auto">
      <h1 className="HEADER_CARTPAGE text-3xl font-bold mt-2 mb-10">
        Shopping Cart
      </h1>
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <div
            key={product.id}
            className="CARTITEM_CARTPAGE flex flex-col my-4 max-w-[695px] w-full mx-auto"
          >
            <div className="CARTITEM-DETAILS_CARTPAGE shadow-card bg-white py-4 px-2 flex flex-row justify-between items-center rounded-md mb-2">
              <div className="IMG-WRAPPER_CARTPAGE flex h-full">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-24 h-24 object-cover"
                />
              </div>
              <div className="CARTITEM-INFO-WRAPPER flex flex-col justify-evenly h-24">
                <div className="CARTITEM-HEADER-WRAPPER flex">
                  <h2 className="CART-ITEM-HEADER text-lg font-semibold">
                    {product.title}
                  </h2>
                </div>
                <div className="CARTITEM-PRICES flex flex-col">
                  <p>
                    Retail Price $
                    {(product.price).toFixed(2)}{" "}
                  </p>
                  {product.discountedPrice < product.price && (
                    <p className="DISCOUNT-AMOUNT_CARTPAGE my-1 text-sm text-gray-500">
                      Discount: -$
                      {(product.price - product.discountedPrice).toFixed(
                        2
                      )}{" "}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decrementQuantity(product.id)}
                  className="mx-2"
                >
                  -
                </button>
                <span className="QUANTITY_CARTPAGE font-semibold mx-2">{product.quantity}</span>
                <button
                  onClick={() => incrementQuantity(product.id)}
                  className="mx-1"
                >
                  +
                </button>
              </div>
              <p className="ITEM-TOTAL">
                $
                {(
                  (product.discountedPrice ?? product.price) * product.quantity
                ).toFixed(2)}
              </p>
            </div>
            <div className="REMOVE-WRAPPER_CARTPAGE flex w-full justify-end p-2 pb-4">
              <button
                onClick={() => removeFromCart(product.id)}
                className="REMOVE-BTN_CARTPAGE shadow-header flex justify-end bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-all ease-in-out duration-300 hover:scale-105 hover:border border-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="EMPTY_CARTPAGE w-full flex justify-center my-12 text-xl">Your cart is empty.</p>
      )}
      <div className="SUMMATION-OPTIONS-WRAPPER p-6 rounded-md bg-white flex flex-col my-8 max-w-[695px] w-full shadow-card">
        <div className="SUM-HEADER-WRAPPER_CARTPAGE">
          <h2 className="SUM-HEADER text-xl mb-4 font-semibold">Summary</h2>
        </div>
        <div className="SUM_CARTPAGE w-full">
          <div className="RETAIL-SUM-WRAPPER_CARTPAGE flex justify-between my-4">
            <p className="text-lg">Retail Total</p>
            <p className="text-lg">${totals.originalTotal.toFixed(2)}</p>
          </div>
          {discountTotal > 0 && (
            <div className="DISCOUNT-SUM-WRAPPER_CARTPAGE flex justify-between my-4">
              <p className="text-lg">Discount</p>
              <p className="text-lg font-semibold text-red-600">
                -${discountTotal.toFixed(2)}
              </p>
            </div>
          )}
          <div className="TOTAL-SUM-WRAPPER_CARTPAGE flex justify-end my-6">
            <p className="text-xl font-bold">
              Total: ${totals.discountedTotal.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="OPTION-BTNS-WRAPPER_PAGECART w-full flex justify-between mt-8">
          <button
            onClick={handleCheckout}
            className="bg-logo-green text-white transition-all ease-in-out duration-300 hover:bg-logo-green-hover hover:scale-105 py-2 px-4 rounded"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white hover:bg-red-700 transition-all ease-in-out duration-300 hover:scale-105 py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
