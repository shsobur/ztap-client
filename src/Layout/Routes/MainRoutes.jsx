import Main from "../Main/Main";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import HomePageLayout from "../Pages/HomePage/HomePageLayout/HomePageLayout";

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
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
