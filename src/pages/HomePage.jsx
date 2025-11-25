import React, { useState, useEffect } from 'react';
import all from '../assets/images/all.svg';
import bundeles from '../assets/images/bundles.svg';
import herbs from '../assets/images/herbs.svg';
import vegetables from '../assets/images/vegetables.svg';
import fruits from '../assets/images/fruits.svg';
import supplies from '../assets/images/supplies.svg';
import Flower from '../assets/images/flower.svg';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'ALL', name: 'ALL', icon: all },
    { id: 'BUNDLES', name: 'BUNDLES', icon: bundeles },
    { id: 'HERBS', name: 'HERBS', icon: herbs },
    { id: 'VEGETABLES', name: 'VEGETABLES', icon: vegetables },
    { id: 'FRUITS', name: 'FRUITS', icon: fruits },
    { id: 'SUPPLIES', name: 'SUPPLIES', icon: supplies },
    { id: 'FLOWERS', name: 'FLOWERS', icon: Flower }
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products?limit=12');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(product => product.category === activeCategory.toLowerCase());

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our products.
          </h2>
          <a 
            href="#all-products" 
            className="text-green-600 hover:text-green-700 font-medium text-sm md:text-base transition-colors"
          >
            View all ({products.length})
          </a>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg border-2 
                transition-all duration-200 font-medium text-sm md:text-base
                ${
                  activeCategory === category.id
                    ? 'border-green-600 bg-green-50 text-green-600'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50'
                }
              `}
            >
              <img 
                src={category.icon} 
                alt={category.name} 
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative bg-gray-50 p-6 aspect-square flex items-center justify-center">
                  <img 
                    src={product.thumbnail} 
                    alt={product.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <svg 
                      className={`w-5 h-5 ${favorites.includes(product.id) ? 'fill-yellow-400 stroke-yellow-400' : 'fill-none stroke-gray-400'}`}
                      viewBox="0 0 24 24" 
                      strokeWidth="2"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400' : 'fill-gray-300'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                  </div>

                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;