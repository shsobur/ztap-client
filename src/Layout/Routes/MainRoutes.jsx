import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import HomePageLayout from "../Pages/HomePageLayout/HomePageLayout";

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
