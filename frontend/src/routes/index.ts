import { createBrowserRouter } from "react-router-dom"
import { authRoutes } from "../modules/auth/routes"

export const router = createBrowserRouter([
  ...authRoutes
])