import BookForm from "./BookForm";
import Book from "./Book";

export default function Main({ handleAddBook, books }) {
    return (
        <main>
            <BookForm handleSubmit={handleAddBook} />
            <div className="books">
                {" "}
                {books.map((book) => (
                    <Book key={book.title} {...book} />
                ))}
            </div>
        </main>
    );
}
