import Layout from "./components/Layout/Layout";
import { CartProvider } from "./contexts/CartContext";

function App({ children }) {
  return (
    <CartProvider>
      <Layout>
        <main className="PAGE-CONTENT">{children}</main>
      </Layout>
    </CartProvider>
  );
}

export default App;
