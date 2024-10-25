import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MedicalTerms from "./pages/MedicalTerms";
import AddReport from "./pages/user/AddReport";
import UserLogin from "./pages/user/UserLogin";
import UserSignup from "./pages/user/UserSignup";
import UserInfo from "./pages/user/UserInfo";
import HomeUser from "./pages/user/HomeUser";
import ResultsHistory from "./Components/user/ResultsHistory";

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
  { path: "/user/history", element: <UserInfo /> },
  { path: "/reports/:id", element: <ResultsHistory /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
