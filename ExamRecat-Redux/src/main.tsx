import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import AddTask from "./features/addTask/AddTask"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditTask from "./features/editTask/EditTask"
import Dashboard from "./features/dashboard/Dashboard"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/add",
    element: <AddTask />,
  },
  {
    path: "/edit/:id",
    element: <EditTask />,
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
