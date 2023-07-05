import BookForm from "./BookForm";
import Book from "./Book";

export default function Main({
    handleAddBook,
    handleDeleteBook,
    handleChangeStatus,
    books,
}) {
    return (
        <main>
            <BookForm handleSubmit={handleAddBook} />
            <div className="books">
                {books.map((book) => (
                    <Book
                        handleChangeStatus={handleChangeStatus}
                        handleDelete={handleDeleteBook}
                        key={book.title + book.author}
                        {...book}
                    />
                ))}
            </div>
        </main>
    );
}
