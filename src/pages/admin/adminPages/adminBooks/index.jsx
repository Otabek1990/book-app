import { useDispatch, useSelector } from "react-redux"
import Button from "@components/ui/Button"
import { setModal, setModalType } from "@features/modalSlice"
import Modal from "@components/ui/Modal"
import { useBooksQuery } from "../../../../services/bookApi"


function AdminBooks() {
  const visibleModal = useSelector(state => state.modal.visibleModal)
  const dispatch = useDispatch()
  const { data: books, isSuccess } = useBooksQuery()
  return (
    <div className="overflow-x-auto w-full ">
      <header className="flex items-center justify-between border-b-2 border-slate-400 mb-4 pb-2">
        <h1 className="font-bold text-2xl">Books</h1>
        <Button
          handleClick={() => {
            dispatch(setModal(true))
            dispatch(setModalType("book"))
          }}
          buttonStyles={"bg-blue-500 text-white py-1 text-base"}>
          Add new book

        </Button>
      </header>

      {isSuccess && (
        <div className="w-full grid grid-cols-3 gap-5 ">
          {
            books.map(item => (
              <div className="bg-slate-300 p-4 rounded-md" key={item.id}>
                <img height={"300px"} width={"100%"} src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <h2>{item.price}</h2>

              </div>
            ))
          }
        </div>
      )}

      {visibleModal && <Modal />}

    </div>
  )
}

export default AdminBooks
