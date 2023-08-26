import { useState, useEffect } from "react";
import useBooksContext from './hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [pages, setPages] = useState('')
    const [image, setImage] = useState('https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60')
    const { createBook } = useBooksContext();

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
        setImage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (author == '' || genre == '' || title == '' || pages == 0 || pages <= 1) {
            alert('Empty input'); 
        } else {
            
            createBook(author, title, genre, pages, image)

            setAuthor('')
            setGenre('')
            setTitle('')
            setPages('')
            setImage('https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60')
        }

    }

    useEffect(() => {
        if (image == '') {
            console.log('empty')
            setImage('https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60')
        }
    }, [image])

    return (
        <div className="book-create-container">
        <div className="book-create">
            <form className="form" onSubmit={handleSubmit}>
                <input className="input bgColor1" 
                    type="text" 
                    name="title" 
                    onChange={handleChange} 
                    value={title} 
                    placeholder="Title.."/>
                <input className="input bgColor1" 
                    type="text" 
                    name="author" 
                    onChange={handleAuthorChange} 
                    value={author} 
                    placeholder="Author.."/>
                <input className="input bgColor1"
                    type="text"
                    name="genre" 
                    value={genre}
                    onChange={handleGenreChange}
                    placeholder="Genre.."
                    />
                <input className="input bgColor1"
                    type="number"
                    name="pages" 
                    value={pages}
                    onChange={handlePagesChange}
                    placeholder="Number of pages.."
                    />
                <input className="input bgColor1"
                    type="url"
                    name="image" 
                    value={image}
                    onChange={handleImageChange}
                    placeholder="Image.."
                    />
                <button className="button">Add your book</button>
            </form>
        </div>
        <div className="book-show bgColor1 content">
                <img src={image} alt="book" />
                <div className="book-text">
                    <h3>{title}</h3>
                    <h5>{author}</h5>
                    <h5>{genre}</h5>
                    <h5>{pages} {pages != '' ? 'pages' : ''}</h5>
                </div>
        </div>

        
        </div>
    )
}

export default BookCreate;