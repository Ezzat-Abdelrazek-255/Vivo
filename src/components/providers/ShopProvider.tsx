"use client";
import { createContext, useContext, useReducer } from "react";
type stateType = {
  cart: Item[];
  isOpen: boolean;
};

const initialState: stateType = {
  cart: [],
  isOpen: false,
};

const initialValue = {
  state: initialState,
  addItem: (item: Item) => {},
  removeItem: (id: number) => {},
  increaseQuantity: (id: number) => {},
  decreaseQuantity: (id: number) => {},
  openCart: () => {},
  closeCart: () => {},
};

const ShopContext = createContext(initialValue);

const shopReducer = (
  state: stateType,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case "cart/open":
      return { ...state, isOpen: true };
    case "cart/close":
      return { ...state, isOpen: false };
    case "item/add":
      return { ...state, cart: [...state.cart, action.payload] };
    case "item/remove":
      return {
        ...state,
        cart: state.cart.filter((item: Item) => item.id !== action.payload),
      };
    case "item/increase":
      return {
        ...state,
        cart: state.cart.map((item: Item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "item/decrease":
      return {
        ...state,
        cart: state.cart.map((item: Item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addItem = (item: Item) => {
    dispatch({ type: "item/add", payload: item });
  };
  const removeItem = (id: number) => {
    dispatch({ type: "item/remove", payload: id });
  };

  const increaseQuantity = (id: number) => {
    dispatch({ type: "item/increase", payload: id });
  };
  const decreaseQuantity = (id: number) => {
    dispatch({ type: "item/decrease", payload: id });
  };

  const openCart = () => {
    dispatch({ type: "cart/open" });
  };
  const closeCart = () => {
    dispatch({ type: "cart/close" });
  };

  return (
    <ShopContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export default ShopProvider;
