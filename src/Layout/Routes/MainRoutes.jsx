import Main from "../Main/Main";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Pages/HomePage/HomePageLayout/HomePageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
    ],
  },
]);

export default router;
