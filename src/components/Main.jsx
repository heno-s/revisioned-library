import BookForm from "./BookForm";
import Book from "./Book";

export default function Main() {
    return (
        <main>
            <BookForm />
            <div className="books">
                <Book
                    title={"Harry Potter"}
                    author={"J. K. Rowling"}
                    hasRead={true}
                    pages={5}
                />
                <Book
                    title={"No Way"}
                    author={"Winston Churchil"}
                    hasRead={false}
                    pages={345}
                />
            </div>
        </main>
    );
}
