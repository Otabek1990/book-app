import { useDispatch } from "react-redux"
import { setUserToken } from "../../features/users/usersTokenSlice"

function Users() {
    const dispatch=useDispatch()
    return (
        <div>
            <h1>Userlar uchun sahifalar</h1>
            <button onClick={()=>dispatch(setUserToken(false))}>Logout</button>
        </div>
    )
}

export default Users
