import { getProducts } from './lib/products';
import AddToCartButton from './components/AddToCartButton';
export default async function Home() {
  // Fetch products directly on the server – no useState, no useEffect, no loading!
  const products = await getProducts();

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

      {/* Product Grid – rendered on the server */}
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
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}