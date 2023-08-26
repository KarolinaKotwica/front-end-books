import BookShow from "./BookShow";
import useBooksContext from './hooks/use-books-context';

function BookList() {
    const { books } = useBooksContext()

    

    return <div className="book-list">
        books.map(book => {
            <BookShow book={book} key={book.id}/>
        })
    </div>
}

export default BookList;
