const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Current Key in Code:", clerkPublishableKey);
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import { CartProvider } from "./contexts/CartProvider.jsx";

import "./index.css";

if (!clerkPublishableKey) {
  console.warn(
    "Missing VITE_CLERK_PUBLISHABLE_KEY. ClerkProvider will be disabled. Add it to .env.local to enable Clerk features."
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  { path: "login/*", element: <LoginPage /> },
  { path: "/register/*", element: <RegisterPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      signUpPath="/register"
      signInPath="/login"
      fallbackRedirectUrl="/"
    >
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ClerkProvider>
  </StrictMode>
);

//git commit -m "feat: 初始化 React 19 專案"
