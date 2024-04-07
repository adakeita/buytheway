import Star from "../../assets/svg/star.svg";

const SingleProduct = ({ product }) => {
  const imageUrl =
    product.imageUrl ||
    "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  const renderStars = (rating) => {
    if (!rating || rating === 0) {
      return <p className="NO-RATING flex justify-end w-full">No rating</p>;
    }
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img key={i} src={Star} alt="Star" className="inline-block h-4 w-4" />
      );
    }
    return stars;
  };

  return (
    <div className="SINGLEPRODUCT-CONTAINER h-full p-2 my-6 group block sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto bg-white rounded">
      <div className="SINGLEPRODUCT-HEADER-WRAPPER">
        <h1 className="TITLE_SINGLEPRODUCT text-3xl font-bold text-gray-900 mt-4 mb-6">
          {product.title}
        </h1>
      </div>
      <img
        src={product.imageUrl}
        alt={product.title}
        className="IMG_SINGLEPRODUCT h-[350px] w-full object-cover rounded-sm sm:h-[550px]"
      />
      <div className="PRODUCTDETAILS_SINGLEPRODUCT h-full m-auto my-2 flex flex-col w-full">
        <div className="RATING-WRAPPER_SINGLEPRODUCT flex flex-row justify-between items-center mt-0 mb-4">
          <p className="RATING_TXT flex items-center text-sm">
            Customer Rating
          </p>
          <div className="RATING flex items-center justify-between w-3/12">
            {renderStars(product.rating)}
          </div>
        </div>
        <div className="PRICE_SINGLEPRODUCT flex flex-row items-center justify-between mt-4">
        <h2 className="PRICE_TXT flex font-semibold">Retail Price</h2>
          {product.discountedPrice &&
          product.discountedPrice < product.price ? (
            <>
              <p className="text-gray-900 text-lg font-bold line-through">
                ${product.price}
              </p>
            </>
          ) : (
            <p className="PRICE_SINGLEPRODUCT text-gray-900 text-lg font-bold">
              ${product.price}
            </p>
          )}
        </div>
        {product.discountedPrice && product.discountedPrice < product.price && (
          <div className="DISCOUNT_MESSAGE_SINGLEPRODUCT my-2 flex flex-row justify-between items-center">
            <h2 className="text-base font-semibold text-red-500 italic">Discount Price</h2>
            <p className="text-xl text-red-500 font-bold">
              ${product.discountedPrice}
            </p>
          </div>
        )}
        <div className="PRODUCT-DESC-WRAPPER_SINGLEPRODUCT my-6">
          <h3 className="DESC-HEADER text-lg mb-1 font-bold">Description</h3>
          <p className="DESCRIPTION_SINGLEPRODUCT mt-1.5 text-base w-full text-gray-500">
            {product.description}
          </p>
        </div>
        <section className="PRODUCT-REVIEWS-WRAPPER">
          {product.reviews && product.reviews.length > 0 && (
            <div className="REVIEWS mt-4">
              <h4 className="REVIEWS-HEADER text-lg font-semibold">Customer Reviews:</h4>
              {product.reviews.map((review) => (
                <div key={review.id} className="mt-2">
                  <p className="CUSTOMER-NAME font-semibold mb-1">{review.username}</p>
                  <p className="CUSTOMER-REVIEW italic">"{review.description}"</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
