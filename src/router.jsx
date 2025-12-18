import Signin from "./routes/Signin";
import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Signup from "./routes/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
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
