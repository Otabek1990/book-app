/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ADMIN_LOGIN, ADMIN_PAROL } from "../constants";
import { useUsersQuery } from "@services/usersApi";
import { useDispatch } from "react-redux";
import { setUserToken } from "@features/users/usersTokenSlice";
import { setAdminToken } from "@features/admin/adminTokenSlice";
import Button from "@components/ui/Button";


function Login() {
  const dispatch = useDispatch()
  const [isUser, setIsUser] = useState(true);
  const { data: users } = useUsersQuery()
  const navigate = useNavigate()
  const loginHandler = e => {
    e.preventDefault();
    const forma = new FormData(e.target);
    const { username, password } = Object.fromEntries(forma.entries())
    if (isUser) {

      let currentUser = users.find(item => item.username === username && item.password === password)
      if (currentUser) {
        dispatch(setUserToken(true))
        navigate("/")
        return;
      }
      alert("username yoki parol xato!");
      return;
    }
    if (username === ADMIN_LOGIN && password === ADMIN_PAROL) {
      dispatch(setAdminToken(true))
      navigate("/admin");
      return;
    }
    alert("username yoki parol hato kiritildi!")

  }
  return (
    <div className="flex flex-col mx-auto mt-10 w-1/2 min-w-[450px] bg-slate-700 items-center justify-center py-20">
      <h1 className="mb-5 text-2xl text-white font-bold">Login</h1>
      <div className="flex gap-5 justify-center">

        <Button
          handleClick={() => setIsUser(true)}
          buttonStyles={`py-2 ${!isUser ? "bg-slate-100 text-black" : "bg-slate-900 border-4 border-white text-white"} `}>
          User
        </Button>
    


        <Button
        handleClick={() => setIsUser(false)}
        buttonStyles={` ${isUser ? "bg-slate-100 text-black" : "bg-slate-900  border-4 border-white text-white"} `}>

          Admin

        </Button>
      </div>
      <div className=" mt-5 w-full px-5 flex flex-col gap-3 items-center rounded-md   ">


        <form
          onSubmit={loginHandler}
          className="flex flex-col gap-4 w-full   ">

          <input name="username" className="px-3 py-2 w-full border-none  rounded-lg  font-medium outline-none"
            type="text" placeholder="username" />
          <input name="password"
            className="px-3 py-2 w-full border-none  rounded-lg font-medium  
             outline-none"
            type="password"
            autoComplete="off"
            placeholder="password" />
          <button className="py-2 w-full px-3 rounded-md bg-slate-900 text-white font-bold">login</button>
          {
            isUser && <h1 className="text-white">
              Hali royhatdan o'tmaganmisiz? Unda <Link className="text-red-200 underline font-bold" to={"/register"}>Ro'yhatdan o'tish</Link>
            </h1>
          }

        </form>

      </div>
    </div>

  )
}

export default Login
