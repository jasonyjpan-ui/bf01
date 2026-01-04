import { useState, useEffect } from "react";

export default function useMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3301";
        console.log("正在請求的網址:", `${API_URL}/menu`);
        const response = await fetch(`${API_URL}/menu`);
        if (!response.ok) {
          throw new Error("無法獲取菜單資料");
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return { menuItems, isLoading, error };
}
