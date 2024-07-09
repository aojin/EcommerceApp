import React from 'react';
import Header from '../../components/Header/Header';
import CarouselComponent from '../../components/Carousel/Carousel';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';

const HomeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <CarouselComponent />
        <section className="p-4">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
