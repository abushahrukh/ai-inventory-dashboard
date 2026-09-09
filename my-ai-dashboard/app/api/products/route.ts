// This is an API route – it runs on the server and returns JSON data
export async function GET() {
  // This simulates fetching from a database (we'll connect a real DB later)
  const products = [
    { id: 1, name: "Wireless Headphones", price: 49.99 },
    { id: 2, name: "Smart Watch", price: 89.99 },
    { id: 3, name: "Bluetooth Speaker", price: 29.99 },
    { id: 4, name: "Laptop Stand", price: 19.99 },
    { id: 5, name: "USB-C Hub", price: 39.99 },
    { id: 6, name: "Mechanical Keyboard", price: 59.99 },
  ];

  return Response.json(products);
}