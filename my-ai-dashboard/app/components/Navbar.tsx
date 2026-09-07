export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200">
      <h1 className="text-xl font-bold">AI Dashboard</h1>
      <div className="space-x-4">
        <span>Products</span>
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          Cart (0)
        </button>
      </div>
    </nav>
  );
}