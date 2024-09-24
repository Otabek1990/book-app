/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom"


function ProtectedRoutes({ adminToken }) {

    return adminToken ? <Outlet /> : <Navigate to={"login"} />
}

export default ProtectedRoutes
