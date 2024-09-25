import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Home from "./pages/home"
import { Provider } from "react-redux"
import store from "./reducers/store"
import StatePage from "./pages/state"
import ReduxPage from "./pages/redux"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/state",
    element: <StatePage />,
  },
  {
    path: "/redux",
    element: <ReduxPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
