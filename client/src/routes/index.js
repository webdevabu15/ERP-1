import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from "../routes/login/Login";
import Register from "../routes/register/Register";
const Home = lazy(() => import("../pages/home/Home"))
const Admin = lazy(() => import("../pages/admin/Admin"))
const Auth = lazy(() => import("../pages/auth/Auth"))

const RouteController = () => {
  return (
    <Routes>
        <Route path="" element={
            <Suspense fallback={<p>Loading...</p>}>
                <Home/>
            </Suspense>
        }/>
        <Route path="admin" element={
            <Suspense fallback={<p>Loading...</p>}>
                <Admin/>
            </Suspense>
        }/>
        <Route path="auth" element={
            <Suspense fallback={<p>Loading...</p>}>
                <Auth/>
            </Suspense>
        }>
            <Route path='register' element={<Register/>} />
            <Route path="login" element={<Login/>} />
        </Route>
    </Routes>
  )
}

export default RouteController