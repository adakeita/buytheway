import axios from "axios";

const API_BASE_URL = "https://api.noroff.dev/api/v1/online-shop";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

// Fetch single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product with id ${id}:`, error);
    throw error;
  }
};

export const fetchProductsBySearchTerm = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    const data = response.data;

    const filteredData = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredData;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
