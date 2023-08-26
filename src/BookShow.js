import { useState } from "react";
import BookEdit from "./BookEdit";
import PromptPopup from "./PromptPopup";
// import useBooksContext from './hooks/use-books-context';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // const { deleteBookById } = useBooksContext();

    const handleRemove = () => {
        // deleteBookById(book.id)
        setIsOpen(!isOpen)

        console.log(isOpen)
    }

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
    }

    let content = <span><h3 className="color1">{book.title}</h3><h5>{book.author}</h5><h5>{book.genre}</h5><h5>{book.pages} pages</h5></span>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }

    let popup = '';
    if (isOpen) {
        popup = <PromptPopup book={book} setIsOpen={setIsOpen} />
    }

    return (
        <>
            <span>{popup}</span>
            <div className="book-show bgColor1">
            <img src={book.image} alt="books" />
                <div className="content book-text">{content}</div>
                <div className="actions">
                    <button className="edit" onClick={handleEdit}>Edit</button>
                    <button className="delete" onClick={handleRemove}>x</button>
                </div>
            </div>
        </>
    )
}

export default BookShow;