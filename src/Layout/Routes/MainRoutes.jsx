// File path__
import Main from "../Main/Main";
import Carts from "../Pages/Carts/Carts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import ShopPageLayout from "../Pages/ShopPage/ShopPageLayout/ShopPageLayout";
import HomePageLayout from "../Pages/HomePage/HomePageLayout/HomePageLayout";

// Imported package__
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
      {
        path: "/shop",
        element: <ShopPageLayout></ShopPageLayout>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/carts",
        element: <Carts></Carts>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;