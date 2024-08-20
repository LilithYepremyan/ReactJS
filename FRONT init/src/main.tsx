import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile/Dashboard";
import Layout from "./pages/Profile/layout";
import Photos from "./pages/Profile/Photos";
import Settings from "./pages/Settings";
import ChangeLogin from "./pages/ChangeLogin";
import ChangePassword from "./pages/ChangePassword";
import ChangePrivacy from "./pages/ChangePrivacy";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      { path: "photos", element: <Photos /> },
      { path: "settings", element: <Settings /> },
      { path: "changeLogin", element: <ChangeLogin /> },
      { path: "changePassword", element: <ChangePassword /> },
      { path: "changePrivacy", element: <ChangePrivacy /> },
    ],
  },
  // { path: "/changeLogin", element: <ChangeLogin /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);
