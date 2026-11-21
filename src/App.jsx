import { Suspense, lazy, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const Home = lazy(() => import("./pages/Home"));
const ResearchLibrary = lazy(() =>
  import("./components/FullLib.jsx").then((m) => ({
    default: m.ResearchLibrary,
  })),
);
const About = lazy(() => import("./components/About.jsx"));
const Work = lazy(() => import("./components/Work.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const ArticleDetails = lazy(() => import("./components/ArticleDetails.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

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
      <Suspense fallback={<div className="min-h-screen" />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import("./pages/Home");
          return { Component };
        },
      },
      {
        path: "publications",
        lazy: async () => {
          const { ResearchLibrary: Component } =
            await import("./components/FullLib.jsx");
          return { Component };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const { default: Component } = await import("./components/About.jsx");
          return { Component };
        },
      },
      {
        path: "work",
        lazy: async () => {
          const { default: Component } = await import("./components/Work.jsx");
          return { Component };
        },
      },
      {
        path: "blog",
        lazy: async () => {
          const { default: Component } = await import("./components/Blog.jsx");
          return { Component };
        },
      },
      {
        path: "blog/:slug",
        lazy: async () => {
          const { default: Component } =
            await import("./components/ArticleDetails.jsx");
          return { Component };
        },
      },
      {
        path: "contact",
        lazy: async () => {
          const { default: Component } =
            await import("./components/Contact.jsx");
          return { Component };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { default: Component } =
            await import("./components/NotFound.jsx");
          return { Component };
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
