import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Dashboard from "@/containers/Dashboard/Dashboard";
import ImageDetail from "@/containers/ImageDetail/ImageDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "photos", element: <Dashboard /> },
      { path: "photos/:id", element: <ImageDetail /> },
    ],
  },
]);
