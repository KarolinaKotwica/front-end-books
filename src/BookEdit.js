import { useState } from "react";
import useBooksContext from './hooks/use-books-context';

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [genre, setGenre] = useState(book.genre)
    const [pages, setPages] = useState(book.pages)
    const [image, setImage] = useState(book.image)
    const { editBookById } = useBooksContext();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handlePagesChange = (e) => {
        setPages(e.target.value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit()
        editBookById(book.id, author, title, genre, pages, image)
    }

    return (
        <div>
            <div className="color1">Edit book: {book.title}</div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <input className="input bgColor1" 
                    type="text" 
                    placeholder="New title" 
                    value={title} 
                    onChange={handleChange} />
                <input className="input bgColor1" 
                    type="text" 
                    placeholder="New author" 
                    value={author} 
                    onChange={handleAuthorChange} />
                <input className="input bgColor1"
                    type="text"
                    placeholder="New genre"
                    value={genre}
                    onChange={handleGenreChange} />
                <input className="input bgColor1"
                    type="number"
                    placeholder="Number of pages.."
                    value={pages}
                    onChange={handlePagesChange} />
                <input className="input bgColor1"
                    type="url"
                    name="image" 
                    value={image}
                    onChange={handleImageChange} />
                <button className="button is-primary" type="submit">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;