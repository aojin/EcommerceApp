import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import ProductFilterSidebar from '../../components/ProductFilterSidebar/ProductFilterSidebar.web';
import Header from '../../components/Header/Header.web'; // Ensure the Header is imported correctly

const ProductListScreen = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    size: '',
    price: '',
  });

  const handleFilterSelection = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const isSelected = (type, value) => filters[type] === value;

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 pt-16 overflow-hidden">
        <ProductFilterSidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          filters={filters}
          handleFilterSelection={handleFilterSelection}
          isSelected={isSelected}
        />
        <div
          className="flex-1 flex flex-col overflow-hidden"
          style={{
            height: 'calc(100vh - 64px)', // Adjust based on header height
            transition: 'width 0.3s',
            width: isCollapsed ? 'calc(100% - 4rem)' : 'calc(100% - 16rem)',
          }}
        >
          <div className="p-4 flex-1 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <Footer className="mt-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProductListScreen;
