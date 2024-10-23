import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MedicalTerms from "./pages/MedicalTerms";
import AddReport from "./pages/user/AddReport";
import UserLogin from "./pages/user/UserLogin";
import UserSignup from "./pages/user/UserSignup";
import UserInfo from "./pages/user/UserInfo";
import HomeUser from "./pages/user/HomeUser";
import Results from "./Components/user/Results";
import Witing from "./pages/Witing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/terms", element: <MedicalTerms /> },

  { path: "/user", element: <HomeUser /> },
  { path: "/user/login", element: <UserLogin /> },
  { path: "/user/signup", element: <UserSignup /> },
  { path: "/report", element: <AddReport /> },
  { path: "/user/history", element:  <UserInfo />}, // just add an ID to the path
  { path: "/Results", element: <Results /> }, // this must be deleted
  { path: "/Witing", element: <Witing /> }, // this must be deleted
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
