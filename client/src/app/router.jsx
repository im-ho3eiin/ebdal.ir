import { createBrowserRouter } from "react-router-dom";
import ShopLayout from "../layouts/ShopLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ShopLayout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <HomePage /> },               // /shop
        { path: "products", element: <ProductsPage /> },      // /shop/products
        { path: "products/:slug", element: <ProductDetailsPage /> }, // /shop/products/:slug
        { path: "cart", element: <CartPage /> },              // /shop/cart
        { path: "checkout", element: <CheckoutPage /> },      // /shop/checkout
      ],
    },
  ],
  {
    // مهم: این مقدار باعث می‌شود همه مسیرها زیر /shop کار کنند
    basename: "/shop",
  }
);
