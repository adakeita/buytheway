import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";
import CheckoutSuccessPage from "../pages/CheckoutSuccess";
import ContactPage from "../pages/Contact";

console.log(
  HomePage,
  ProductPage,
  CartPage,
  CheckoutPage,
  CheckoutSuccessPage,
  ContactPage
);
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default AppRoutes;
