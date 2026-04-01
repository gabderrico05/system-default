import { Navigate } from "react-router-dom"
import { Login } from "./pages/Login"
import SignUp from "./pages/SignUp"

export const authRoutes = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  }
]