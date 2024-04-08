import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const CheckoutSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="text-green-500 w-16 h-16" />
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">
            Checkout Successful
          </h1>
          <p className="text-gray-600 mt-2">Thank you for your order!</p>
          <Link
            to="/"
            className="mt-6 bg-logo-green hover:bg-logo-green-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
