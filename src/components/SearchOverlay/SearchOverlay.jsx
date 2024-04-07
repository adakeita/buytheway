import React from "react";

const SearchOverlay = ({ searchTerm, searchResults, onClose }) => {
  if (!searchTerm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-h-80 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          &times;
        </button>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li> //NOTE remember Update this line
            ))}
          </ul>
        ) : (
          <p>No results found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
