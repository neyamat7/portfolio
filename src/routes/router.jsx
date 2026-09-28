import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";

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
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "all-projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

export default router;
