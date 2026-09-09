import { create } from 'zustand';

// This is your "cart brain" – it holds the cart items and knows how to add them
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: { id: number; name: string; price: number }) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      // Check if the product is already in the cart
      const existingItem = state.items.find((item) => item.id === product.id);
      
      if (existingItem) {
        // If it exists, increase quantity by 1
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If it's new, add it with quantity 1
        return {
          items: [...state.items, { ...product, quantity: 1 }],
        };
      }
    }),
}));