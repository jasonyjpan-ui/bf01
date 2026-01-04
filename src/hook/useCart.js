import { useContext } from "react";
import CartContext from "../contexts/cartContext.js";

export default function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart 必須在 CartProvider 中使用");
  }
  return context;
}
