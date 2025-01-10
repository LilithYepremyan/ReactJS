import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import Layout from "./features/layout/layout"
import Books from "./features/books/books"
import Authors from "./features/authors/authors"
import AddBook from "./features/addBook/addBook"
import AddAuthor from "./features/addAuthor/addAuthor"
import BookDetail from "./features/bookDetail/bookDetail"
import EditBook from "./features/editBook/editBook"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetail />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path:"/edit-book/:id",
        element:<EditBook/>
      }
    ],
  },
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
