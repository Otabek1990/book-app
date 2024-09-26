import { Route, Routes } from "react-router-dom"
import AdminUsers from "./adminPages/adminUsers"
import AdminBooks from "./adminPages/adminBooks"
import AdminFavourites from "./adminPages/adminFavourites"
import AdminDashboard from "./adminPages/adminDashboard"
import AdminBaskets from "./adminPages/adminBaskets"


function AdminContent() {
  return (
    <div className='flex flex-col items-center py-20 bg-gray-100 w-full h-full'>
    
        <Routes>
          <Route path={"/"} element={<AdminDashboard/>}/>
          <Route path={"/users"} element={<AdminUsers/>}/>
          <Route path={"/books"} element={<AdminBooks/>}/>
          <Route path={"/favourites"} element={<AdminFavourites/>}/>
          <Route path={"/baskets"} element={<AdminBaskets/>}/>
        </Routes>
     
    
    </div>
  )
}

export default AdminContent
