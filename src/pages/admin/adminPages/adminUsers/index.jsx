import { useUsersQuery } from "../../../../services/usersApi"
import AdminUsersTableRow from "./AdminUsersTableRow"

function AdminUsers() {

  const {data, isSuccess} = useUsersQuery()
  console.log(data)

  return (
    <div className="overflow-x-auto w-full p-10">
    <table className="w-full text-sm text-left text-gray-500 border-collapse">
      <thead className="bg-gray-200">
        <tr>
          <th scope="col" className="px-6 py-3 font-medium text-gray-900">Username</th>
          <th scope="col" className="px-6 py-3 font-medium text-gray-900">Name</th>
          <th scope="col" className="px-6 py-3 font-medium text-gray-900">Tel</th>
          <th scope="col" className="px-6 py-3 font-medium text-gray-900">Password</th>
          <th scope="col" className="px-6 py-3 font-medium text-gray-900">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        { isSuccess && data.map((item) => (
           <AdminUsersTableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AdminUsers
