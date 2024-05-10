import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, { loader as movieLoader } from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import WatchedHistory from "./pages/WatchedHistory";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./Ui/AppLayout";
import RelatedMovies from "./features/RelatedMovies";
import Bookmark from "./features/Bookmark";

const router = createBrowserRouter([
  {
    // path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/",
        element: <Home />,
        loader: movieLoader,
      },
      {
        path: "/details/:movieId/:title",
        element: <WatchedHistory />,
        children: [
          {
            index: true,
            // path: "/details/:movieId/:title/related",
            element: <RelatedMovies />,
          },
          {
            path: "/details/:movieId/:title/related",
            element: <RelatedMovies />,
          },
          {
            path: "/details/:movieId/:title/bookmark",
            element: <Bookmark />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
