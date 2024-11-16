import Main from "../Main/Main";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Pages/HomePage/HomePageLayout/HomePageLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

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
    ],
  },
]);

export default router;
