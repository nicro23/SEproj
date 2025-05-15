
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// نوع المنتج في السلة
export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  priceLabel: string;
  icon?: React.ReactNode;
};

// حالة السلة
type CartState = {
  items: CartItem[];
  total: number;
};

// أنواع الإجراءات
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" };

// السياق الافتراضي
const defaultCartState: CartState = {
  items: [],
  total: 0,
};

// وظيفة الخفض (reducer)
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // المنتج موجود، نقوم بتحديث الكمية
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };

        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      } else {
        // المنتج غير موجود، نضيفه
        const updatedItems = [...state.items, action.payload];
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      }
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        // إذا كانت الكمية صفر أو أقل، نحذف المنتج
        const updatedItems = state.items.filter((item) => item.id !== id);
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      }

      // تحديث الكمية
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case "CLEAR_CART":
      return defaultCartState;

    default:
      return state;
  }
};

// حساب إجمالي المبلغ
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// إنشاء سياق السلة
export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: defaultCartState,
  dispatch: () => null,
});

// مزود السياق
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// هوك مخصص لاستخدام سياق السلة
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart يجب استخدامه داخل CartProvider");
  }
  return context;
};
