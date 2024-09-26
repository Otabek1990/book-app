/* eslint-disable react/prop-types */

import { FaTrash } from "react-icons/fa"
import Button from "../../../../components/ui/Button"
import { AiFillEdit } from "react-icons/ai"

function AdminUsersTableRow({item}) {
  return (
    <tr>
    <td className="px-6 py-4">{item?.username}</td>
    <td className="px-6 py-4">{item?.name}</td>
    <td className="px-6 py-4">{item?.tel}</td>
    <td className="px-6 py-4">{item?.password}</td>
    <td className="px-6 py-4">
        <Button>
            <FaTrash />
        </Button>
        <Button>
            <AiFillEdit />
        </Button>
    </td>
  </tr>
  )
}

export default AdminUsersTableRow
