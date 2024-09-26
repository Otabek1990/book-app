import { Link } from "react-router-dom"
import { sidebarItems } from "./sidebarItems"
import { useState } from "react"


function AdminSidebar() {
  const [activeId,setActive]=useState(1)
  return (
    <div className="w-80  h-screen flex flex-col items-start gap-10 py-5  bg-white">
      <h1 className="text-3xl w-full text-center font-bold">Logo</h1>
      <div className="flex w-full flex-col items-start">
        {
          sidebarItems.map(item => (
            <Link 
            onClick={()=>setActive(item.id)}
             className={`${activeId===item.id ? "bg-blue-500 text-white":"bg-white text-blue"} w-full p-2 text-lg px-10 `} key={item.id} to={item.link}>
              {item.title}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default AdminSidebar
