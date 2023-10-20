import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../layout/AppWrapper";
import Home from "../pages/home/Home";
import AddProduct from "../pages/product/AddProduct";
import MyCart from "../pages/my-cart/MyCart";
import NotFound from "../pages/notfound/NotFound";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import ProductDetails from "../pages/product/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import BrandProduct from "../pages/brand/BrandProduct";
import UpdateProduct from "../pages/product/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/brand-product/:id",
        element: (
          <PrivateRoutes>
            <BrandProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/registration",
        element: (
          <PublicRoutes>
            <Registration />
          </PublicRoutes>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          return fetch(
            `${import.meta.env.VITE_SERVER_URL}/product/${params.id}`
          );
        },
      },
      {
        path: "/product-update/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
