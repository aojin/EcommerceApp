import React from 'react';

const ProductCard = () => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src="https://picsum.photos/150"
        alt="Product"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-lg font-bold mt-2">Product Title</h3>
      <p className="text-gray-500 mt-1">$99.99</p>
      <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
