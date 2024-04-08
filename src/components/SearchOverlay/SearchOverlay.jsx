import ProductCard from "../ProductCard/ProductCard";

const SearchOverlay = ({ searchTerm, searchResults, onClose }) => {

  if (!searchTerm) return null;


  const handleProductClick = () => {
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md h-5/6 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          &times;
        </button>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <ProductCard
              key={result.id}
              product={result}
              onClick={handleProductClick}
            />
          ))
        ) : (
          <p>No results found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
