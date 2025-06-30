import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
