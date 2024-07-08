import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const CheckoutScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p className="text-base mb-4">No items to checkout.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Place Order
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutScreen;
