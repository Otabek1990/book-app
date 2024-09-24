/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom'
import Header from "@components/layouts/Header"

function UserProtectedRoutes({ userToken }) {
    return userToken ?
        <>
            <Header />
            <Outlet />
        </>
        : <Navigate to={"login"} />
}

export default UserProtectedRoutes
