import Button from "@components/ui/Button"
import { useUsersQuery } from "@services/usersApi"
import AdminUsersTableRow from "./AdminUsersTableRow"
import Modal from "@components/ui/Modal"
import { useDispatch, useSelector } from "react-redux"
import { setModal } from "@features/modalSlice"
import { setModalType } from "../../../../features/modalSlice"


function AdminUsers() {
  const visibleModal = useSelector(state => state.modal.visibleModal)
  const dispatch = useDispatch()
  const { data, isSuccess } = useUsersQuery()



  return (
    <div className="overflow-x-auto w-full ">
      <header className="flex items-center justify-between border-b-2 border-slate-400 mb-4 pb-2">
        <h1 className="font-bold text-2xl">Users</h1>
        <Button
          handleClick={() => {
            dispatch(setModal(true))
            dispatch(setModalType("user"))
          }}
          buttonStyles={"bg-blue-500 text-white py-1 text-base"}>
          Add new user

        </Button>
      </header>
      <table className="w-full text-md font-medium text-left text-gray-800 border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Name</th>
            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Username</th>
            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Tel</th>
            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Password</th>
            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Added time</th>
            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {isSuccess && data.map((item) => (
            <AdminUsersTableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      {visibleModal && <Modal />}
    </div>
  )
}

export default AdminUsers
