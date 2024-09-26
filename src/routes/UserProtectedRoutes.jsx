
import { Navigate, Outlet } from 'react-router-dom'
import Header from "@components/layouts/Header"
import { useSelector } from 'react-redux'

function UserProtectedRoutes() {
    const userToken = useSelector(state => state.userToken.userToken)
    return userToken ?
        <>
            <Header />
            <Outlet />
        </>
        : <Navigate to={"login"} />
}

export default UserProtectedRoutes
