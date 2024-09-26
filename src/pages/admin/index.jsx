import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import AdminContent from './AdminContent'

function AdminPage() {
  return (
    <div className='w-full flex '>
        <AdminSidebar />
         <div className='flex flex-col w-full'>
          <AdminNavbar />
          <AdminContent />
         </div>
     </div>
  )
}

export default AdminPage
