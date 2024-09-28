/* eslint-disable react/prop-types */

import { FaTrash } from "react-icons/fa"
import Button from "@components/ui/Button"
import { AiFillEdit } from "react-icons/ai"
import { useDeleteUserMutation } from "@services/usersApi"
import { formatTime } from "@utils/formatTime"
import { useDispatch, useSelector } from "react-redux"
import { setModal, setModalType } from "@features/modalSlice"
import Modal from "@components/ui/Modal"
import { setCurrentUserId } from "../../../../features/modalSlice"


function AdminUsersTableRow({ item }) {
  const visibleModal = useSelector(state => state.modal.visibleModal)
  const [deleteUser] = useDeleteUserMutation()
  const dispatch = useDispatch()
  const deleteUserHandler = async () => {
    await deleteUser(item.id)
  }
  return (
    <>

      <tr>
        <td className="px-6 py-4">{item?.name}</td>
        <td className="px-6 py-4">{item?.username}</td>
        <td className="px-6 py-4">{item?.tel}</td>
        <td className="px-6 py-4">{item?.password}</td>
        <td className="px-6 py-4">{formatTime(item?.added) || "-"}</td>
        <td className="px-6 py-4">
          <Button handleClick={deleteUserHandler}>
            <FaTrash />
          </Button>
          <Button handleClick={() => {
            dispatch(setModal(true))
            dispatch(setModalType("editUser"))
            dispatch(setCurrentUserId(item.id))
          }
          }>
            <AiFillEdit />
          </Button>
        </td>
      </tr>
      {visibleModal && <Modal>
        <h1>Edit user</h1>
      </Modal>}
    </>
  )
}

export default AdminUsersTableRow
