import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../components/screen/Header";
import Footer from "../components/screen/Footer";
import Home from "../components/screen/Home";
import Signin from "../components/screen/Signin";
import Signup from "../components/screen/Signup";
import Adpost from "../components/screen/Adpost";
import AdDetails from "../components/screen/AdDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Signin",
        element: <Signin />,
      },

      {
        path: "Signup",
        element: <Signup />,
      },
      {
        path: "Adpost",
        element: <Adpost />,
      },
      {
        path : 'Adpost/:id',
        element : <AdDetails/>
      }
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

function Dashboard() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export { Router };
