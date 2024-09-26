import { useDispatch } from "react-redux"
import { setAdminToken } from "@features/admin/adminTokenSlice"
import Button from "@components/ui/Button"


function AdminNavbar() {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between p-5 bg-white">
      <h1 className="text-xl font-semibold">Text</h1>
      <div className="flex items-center justify-center gap-2">
        <span className="font-semibold">Admin</span>

        <Button
          handleClick={() => dispatch(setAdminToken(false))}
          buttonStyles={"bg-red-600 text-white "}>
          Log Out
        </Button>
      </div>
    </div>
  )
}

export default AdminNavbar
