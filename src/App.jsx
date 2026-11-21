import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

// Each route's page is downloaded only when that route is visited
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    HydrateFallback: () => <div className="min-h-screen" />,
    children: [
      {
        index: true,
        lazy: () =>
          import("./pages/Home").then((m) => ({ Component: m.default })),
      },
      {
        path: "publications",
        lazy: () =>
          import("./components/FullLib.jsx").then((m) => ({
            Component: m.ResearchLibrary,
          })),
      },
      {
        path: "about",
        lazy: () =>
          import("./components/About.jsx").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "work",
        lazy: () =>
          import("./components/Work.jsx").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "blog",
        lazy: () =>
          import("./components/Blog.jsx").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "blog/:slug",
        lazy: () =>
          import("./components/ArticleDetails.jsx").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "contact",
        lazy: () =>
          import("./components/Contact.jsx").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "*",
        lazy: () =>
          import("./components/NotFound.jsx").then((m) => ({
            Component: m.default,
          })),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
