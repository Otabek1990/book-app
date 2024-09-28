/* eslint-disable react/prop-types */

import UserModalForm from "@pages/admin/adminPages/adminUsers/UserModalForm"
import BookModalForm from "@pages/admin/adminPages/adminBooks/BookModalForm"
import { useSelector } from "react-redux"
import UserEditModalForm from "@pages/admin/adminPages/adminUsers/UserEditModalForm"



function Modal() {
    const currentUserId = useSelector(state => state.modal.currentUserId)
    const modalTypes = {
        user: <UserModalForm />,
        editUser: <UserEditModalForm id={currentUserId} />,
        book: <BookModalForm />
    }
    const modalType = useSelector(state => state.modal.modalType)

    return (
        <div className="h-screen top-0 left-0 flex items-center justify-center
         w-full fixed bg-slate-600 bg-opacity-20">
            <div className="w-96 min-h-80 bg-white p-4 rounded-md">
                {modalTypes[modalType]}
            </div>

        </div>
    )
}

export default Modal
