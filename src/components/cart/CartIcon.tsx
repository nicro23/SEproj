
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const CartIcon = () => {
  const { state } = useCart();
  
  const itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
  
  return (
    <Link to="/cart" className="relative p-2 text-primary hover:text-accent">
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
