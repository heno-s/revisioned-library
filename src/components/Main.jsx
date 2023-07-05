import BookForm from "./BookForm";
import Book from "./Book";

export default function Main() {
    return (
        <main>
            <BookForm />
            <div className="books">
                <Book />
                <Book />
            </div>
        </main>
    );
}
