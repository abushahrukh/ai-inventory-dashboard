export default function Home() {
  // This is an array of 6 sample products (hardcoded for now)
  const products = [
    { id: 1, name: "Wireless Headphones", price: 49.99 },
    { id: 2, name: "Smart Watch", price: 89.99 },
    { id: 3, name: "Bluetooth Speaker", price: 29.99 },
    { id: 4, name: "Laptop Stand", price: 19.99 },
    { id: 5, name: "USB-C Hub", price: 39.99 },
    { id: 6, name: "Mechanical Keyboard", price: 59.99 },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section - the big welcome area */}
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

      {/* Product Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
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
            <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}