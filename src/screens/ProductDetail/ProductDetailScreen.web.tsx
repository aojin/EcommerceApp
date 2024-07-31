import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProductDetailScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <img
          src="https://picsum.photos/150"
          alt="Product"
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-2xl font-bold">Product Title</h2>
        <p className="text-lg text-gray-500 mb-4">$99.99</p>
        <p className="text-base mb-4">Product Description</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Add to Cart
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailScreen;
