import Input from '@components/ui/Input'

import { useAddUserMutation } from '@services/usersApi';
import { useDispatch } from 'react-redux';
import { setModal } from '@features/modalSlice';
import Button from '@components/ui/Button';
import { useAddBookMutation } from '../../../../services/bookApi';

function BookModalForm() {
    const [addBook] = useAddBookMutation()
    const dispatch = useDispatch()
    const handleAddBook = async (event) => {
        event.preventDefault();
        const forma = new FormData(event.target)
        const data = Object.fromEntries(forma.entries())
        const added = new Date();
        const newUser = { ...data, added }

        await addBook(newUser).then(() => dispatch(setModal(false)))

    }
    return (
        <>
            <h1 className="text-center text-xl font-medium">Add book</h1>

            <form
                onSubmit={handleAddBook}
                className="w-full flex flex-col gap-3" >
                <Input
                    className
                    label={"Nomi"}
                    placeholder="Kitob nomini kiriting"
                    type={"text"}
                    inputStyle={""}
                    name="title"
                />

                <Input
                    className
                    label={"Kitob narxi"}
                    placeholder="Kitob narxini kiriting"
                    type={"number"}
                    inputStyle={""}
                    name="price"
                />
                <Input
                    className
                    label={"Rasmi"}
                    placeholder="Kitob rasmini kiriting"
                    type={"text"}
                    inputStyle={""}
                    name="image"
                />
                <div className="w-full flex items-center gap-3 ">
                    <Button
                        type="button"
                        handleClick={() => dispatch(setModal(false))}
                        buttonStyles={"bg-red-500 text-white flex-1 text-base py-2 "}>
                        Cancel
                    </Button>
                    <Button

                        buttonStyles={"bg-blue-600 text-white flex-1 w-full py-2 "}>
                        Add new book
                    </Button>

                </div>
            </form>

        </>
    )
}

export default BookModalForm
