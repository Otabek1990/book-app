
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


function ProtectedRoutes() {
    const adminToken = useSelector(state => state.adminToken.adminToken)

    return adminToken ? <Outlet /> : <Navigate to={"login"} />
}

export default ProtectedRoutes
