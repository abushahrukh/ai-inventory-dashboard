'use client';

import { useCartStore } from '../store/cartStore';

interface Props {
  product: { id: number; name: string; price: number };
}

export default function AddToCartButton({ product }: Props) {
  return (
    <button
      onClick={() => {
        useCartStore.getState().addItem(product);
        console.log(`Added ${product.name} to cart!`);
      }}
      className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
    >
      Add to Cart
    </button>
  );
}