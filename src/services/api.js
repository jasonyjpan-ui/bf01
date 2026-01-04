const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3301";

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "發生未知錯誤" }));
    throw new Error(error.message || "請求失敗");
  }
  return response.json();
}

export async function fetchCart(userId) {
  if (!userId) return [];
  const response = await fetch(`${API_URL}/cart?userId=${userId}`);
  return handleResponse(response);
}

export async function findCartItemByMenuId(menuItemId, userId) {
  if (!userId) return null;
  const response = await fetch(
    `${API_URL}/cart?userId=${userId}&menuItemId=${menuItemId}`
  );
  const items = await handleResponse(response);
  return items[0] || null;
}

export async function addCartItem(item) {
  const response = await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return handleResponse(response);
}

export async function updateCartItem(itemId, updatedFields) {
  const response = await fetch(`${API_URL}/cart/${itemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  });
  return handleResponse(response);
}

export async function removeCartItem(itemId) {
  const response = await fetch(`${API_URL}/cart/${itemId}`, {
    method: "DELETE",
  });
  return handleResponse(response);
}

export async function createOrder(order) {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return handleResponse(response);
}
