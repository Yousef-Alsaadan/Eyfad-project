import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MedicalTerms from "./pages/MedicalTerms";
import AddReport from "./pages/user/AddReport";
import UserLogin from "./pages/user/UserLogin";
import UserSignup from "./pages/user/UserSignup";
import UserInfo from "./pages/user/UserInfo";
import ChatDocters from "./pages/user/ChatDocters";
import Dashboard from "./Components/Dashboard";
import DocterInfo from "./pages/doctor/DocterInfo";
import DocterLogin from "./pages/doctor/DocterLogin";
import DocterSignup from "./pages/doctor/DocterSignup";
import UserQuestion from "./pages/doctor/UserQuestion";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/terms", element: <MedicalTerms /> },

  { path: "/user", element: <UserInfo /> }, // just add an ID to the path
  { path: "/user/login", element: <UserLogin /> },
  { path: "/user/signup", element: <UserSignup /> },
  { path: "/report", element: <AddReport /> },
  { path: "/doctors", element: <ChatDocters /> },

  { path: "/doctor", element: <Dashboard /> },
  { path: "/doctor/info", element: <DocterInfo /> }, // just add an ID to the path
  { path: "/doctor/login", element: <DocterLogin /> },
  { path: "/doctor/signup", element: <DocterSignup /> },
  { path: "/user/question", element: <UserQuestion /> }, // just add an ID to the path

  { path: "/admin", element: <AdminDashboard /> },
  { path: "/admin/login", element: <AdminLogin /> },
  { path: "/admin/signup", element: <AdminSignup /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
