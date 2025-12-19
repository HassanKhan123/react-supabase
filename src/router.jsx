import Signin from "./routes/Signin";
import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Signup from "./routes/Signup";
import RootRedirect from "./routes/RootRirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Header />
        <Dashboard />
      </>
    ),
  },
]);
