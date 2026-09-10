// This simulates a database – later we'll replace this with Prisma + Neon
export const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99 },
  { id: 2, name: "Smart Watch", price: 89.99 },
  { id: 3, name: "Bluetooth Speaker", price: 29.99 },
  { id: 4, name: "Laptop Stand", price: 19.99 },
  { id: 5, name: "USB-C Hub", price: 39.99 },
  { id: 6, name: "Mechanical Keyboard", price: 59.99 },
];

// This function simulates fetching from a database
export async function getProducts() {
  // In the future, this will be: return await prisma.product.findMany()
  return products;
}