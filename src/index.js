import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App.jsx";
import PageNotFound from "./components/PageNotFound/index.jsx";
import SignIn from "./views/SignIn/index.jsx";
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: "BodyElement",
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
