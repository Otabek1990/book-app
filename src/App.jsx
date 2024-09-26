
import {  Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import AdminPage from "./pages/admin"
import { useEffect } from "react"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import Users from "./pages/users"
import UserProtectedRoutes from "./routes/UserProtectedRoutes"
import Register from "./pages/users/Register"
import { useSelector } from "react-redux"


function App() {
  const adminToken = useSelector(state => state.adminToken.adminToken)
  const userToken = useSelector(state => state.userToken.userToken)
  useEffect(() => {
    localStorage.setItem("userToken", JSON.stringify(userToken))
  }, [userToken])
  useEffect(() => {
    localStorage.setItem("adminToken", JSON.stringify(adminToken))
  }, [adminToken])

  return (
    <>
      <Routes>
        <Route path="login"
          element={<Login  />} />
        <Route path="register"
          element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="admin/*" element={<AdminPage />} />
        </Route>
        <Route element={<UserProtectedRoutes  />}>
          <Route path="/" element={<Users />} />
        </Route>
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  )
}

export default App
