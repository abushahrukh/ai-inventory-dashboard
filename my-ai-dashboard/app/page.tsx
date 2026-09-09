'use client';

import ProductList from './components/ProductList';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to AI Inventory & E-Commerce
        </h1>
        <p className="text-gray-600">
          Discover smart shopping with AI-powered recommendations
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Browse Products
        </button>
      </div>

      {/* Product List with loading and error handling */}
      <ProductList />
    </main>
  );
}