
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import AdminPage from "./pages/admin"
import { useState } from "react"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import Users from "./pages/users"
import UserProtectedRoutes from "./routes/UserProtectedRoutes"
import Register from "./pages/users/Register"


function App() {
  const [adminToken, setAdminToken] = useState(false);
  const [userToken, setUserToken] = useState(false)
  return (
    <>

      <Routes>
        <Route path="login"
          element={<Login setUserToken={setUserToken} setAdminToken={setAdminToken} />} />
        <Route path="register"
          element={<Register />} />
        <Route element={<ProtectedRoutes adminToken={adminToken} />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
        <Route element={<UserProtectedRoutes userToken={userToken} />}>
          <Route path="/" element={<Users />} />
        </Route>
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  )
}

export default App
