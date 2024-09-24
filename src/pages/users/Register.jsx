import { Link } from "react-router-dom"
import { useAddUserMutation } from "@services/usersApi";


function Register() {
    const [addUser] = useAddUserMutation()
    const registerHandler = async (e) => {
        e.preventDefault();
        let forma = new FormData(e.target)
        let userData = Object.fromEntries(forma.entries())
        await addUser(userData)

    }
    return (
        <div className="flex flex-col mx-auto mt-10 w-1/2 min-w-[450px] bg-slate-700 items-center justify-center py-20">
            <h1 className="mb-5 text-2xl text-white font-bold">Register</h1>

            <div className=" mt-5 w-full px-5 flex flex-col gap-3 items-center rounded-md   ">


                <form
                    onSubmit={registerHandler}
                    className="flex flex-col gap-4 w-full   ">

                    <input name="name" className="px-3 py-2 w-full border-none  rounded-lg  font-medium outline-none"
                        type="text" placeholder="Ism kiriting" />

                    <input name="username" className="px-3 py-2 w-full border-none  rounded-lg  font-medium outline-none"
                        type="text" placeholder="username" />

                    <input name="tel" className="px-3 py-2 w-full border-none  rounded-lg  font-medium outline-none"
                        type="tel" placeholder="tel raqam" />
                    <input name="password"
                        className="px-3 py-2 w-full border-none  rounded-lg font-medium  
                             outline-none" type="password" placeholder="parol" autoComplete="off" />
                    <button className="py-2 w-full px-3 rounded-md bg-slate-900 text-white font-bold">
                        Register
                    </button>
                    <h1>
                        Oldin royhatdan o'tganmisiz? Unda <Link className="text-red-200 underline font-bold" to={"/login"}>Kirish</Link>
                    </h1>


                </form>

            </div>
        </div>
    )
}

export default Register
