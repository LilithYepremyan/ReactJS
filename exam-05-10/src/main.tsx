import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddBook from "./features/addBook/AddBook"
import Books from "./features/books/Books"
import Book from "./features/book/Book"
import AddComment from "./features/addComment/AddComment"

const container = document.getElementById("root")

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/books", element: <Books /> },
  { path: "/addBook", element: <AddBook /> },
  { path: "details/:id", element: <Book /> },
  { path: "/addComment/:id", element: <AddComment /> },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
