import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faFilter } from '@fortawesome/free-solid-svg-icons';

const ProductFilterSidebar = ({
  isCollapsed,
  setIsCollapsed,
  filters,
  handleFilterSelection,
  isSelected,
}) => {
  return (
    <div
      className={`bg-gray-200 p-4 ${isCollapsed ? 'w-16' : 'w-64'} flex-shrink-0`}
      style={{
        transition: 'width 0.3s',
        height: 'calc(100vh - 64px)', // Adjust based on header height
        overflowY: 'auto',
      }}
    >
      <button
        className="bg-blue-500 text-white px-2 py-1 mb-4"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <FontAwesomeIcon icon={isCollapsed ? faFilter : faChevronLeft} />
      </button>
      <div style={{ width: '250px' }}>
        {' '}
        {/* Fixed width for content */}
        {!isCollapsed && (
          <div>
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            <div>
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2">Category</h4>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('category', 'Category 1') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() =>
                    handleFilterSelection('category', 'Category 1')
                  }
                >
                  Category 1
                </div>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('category', 'Category 2') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() =>
                    handleFilterSelection('category', 'Category 2')
                  }
                >
                  Category 2
                </div>
              </div>
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2">Brand</h4>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('brand', 'Brand 1') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() => handleFilterSelection('brand', 'Brand 1')}
                >
                  Brand 1
                </div>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('brand', 'Brand 2') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() => handleFilterSelection('brand', 'Brand 2')}
                >
                  Brand 2
                </div>
              </div>
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2">Size</h4>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('size', 'Small') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() => handleFilterSelection('size', 'Small')}
                >
                  Small
                </div>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('size', 'Medium') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() => handleFilterSelection('size', 'Medium')}
                >
                  Medium
                </div>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('size', 'Large') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() => handleFilterSelection('size', 'Large')}
                >
                  Large
                </div>
              </div>
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2">Price</h4>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('price', 'Low to High') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() => handleFilterSelection('price', 'Low to High')}
                >
                  Low to High
                </div>
                <div
                  className={`cursor-pointer p-2 ${
                    isSelected('price', 'High to Low') ? 'bg-gray-400' : ''
                  }`}
                  onClick={() => handleFilterSelection('price', 'High to Low')}
                >
                  High to Low
                </div>
              </div>
              <button
                className="bg-blue-500 text-white px-2 py-1 mt-4"
                onClick={() => console.log('Filters applied:', filters)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ProductFilterSidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  handleFilterSelection: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
};

export default ProductFilterSidebar;
