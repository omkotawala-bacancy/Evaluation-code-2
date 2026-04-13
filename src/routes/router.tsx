import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Login from '../pages/Login'
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    }
                ]
            }
        ]
    }
])

export default router