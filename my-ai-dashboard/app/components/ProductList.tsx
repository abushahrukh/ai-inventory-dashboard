'use client';
import ProductSkeleton from './ProductSkeleton';
import { useState, useEffect } from 'react';
import { useCartStore } from '../store/cartStore';

// Define what a product looks like (TypeScript interface)
interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products when this component loads
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Oops! Something went wrong loading products.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Show loading skeletons
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <ProductSkeleton key={n} />
        ))}
      </div>
    );
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Show products
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
        >
          <div className="bg-gray-200 h-48 rounded-lg mb-3 flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-700">${product.price.toFixed(2)}</p>
          <button
            onClick={() => {
              useCartStore.getState().addItem(product);
              console.log(`Added ${product.name} to cart!`);
            }}
            className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}