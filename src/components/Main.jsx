import BookForm from "./BookForm";
import Book from "./Book";

export default function Main({
    handleAddBook,
    handleDeleteBook,
    handleChangeStatus,
    booksToDisplay,
}) {
    return (
        <main>
            <BookForm handleSubmit={handleAddBook} />
            <div className="books">
                {booksToDisplay.map((book) => (
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
