import React, { useState } from "react";
import useMenu from "../hook/useMenu";
import { formatCurrency } from "../utils/helpers";
import { useUser } from "@clerk/clerk-react";
import useCart from "../hook/useCart";

const Menu = () => {
  const { menuItems, isLoading, error } = useMenu();
  const { isSignedIn } = useUser();
  const { addToCart } = useCart();

  const [isAdding, setIsAdding] = useState(null);
  const [feedback, setFeedback] = useState(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error shadow-lg">
        <span>載入菜單資料時發生錯誤：{error}</span>
      </div>
    );
  }

  const handleAddToCart = async (item) => {
    if (isAdding) return;

    setIsAdding(item.id);
    setFeedback(null);
    try {
      await addToCart(item);
      setFeedback({ type: "success", message: `${item.name} 已加入購物車！` });
    } catch (err) {
      setFeedback({
        type: "error",
        message: err.message || "加入失敗，請稍後再試",
      });
    } finally {
      setIsAdding(null);

      setTimeout(() => setFeedback(null), 3000);
    }
  };

  return (
    <div className="space-y-12">
      {feedback && (
        <div
          className={`alert ${
            feedback.type === "error" ? "alert-error" : "alert-success"
          }`}
        >
          <span>{feedback.message}</span>
        </div>
      )}
      <section>
        <h1 className="text-3xl font-bold mb-6">美味菜單</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <p className="text-lg font-semibold">
                  {formatCurrency(item.price)}
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    disabled={!isSignedIn}
                    onClick={() => handleAddToCart(item)}
                  >
                    {isSignedIn ? "加入購物車" : "請先登入"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
