import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style.css";

function App() {
    const [books, setBooks] = useState([]);

    function handleAddBook(bookData) {
        setBooks([...books, bookData]);
    }

    function handleDeleteBook(id) {
        setBooks(books.filter((book) => book.id !== id));
    }

    function handleChangeStatus(id) {
        setBooks(
            books.map((book) => {
                if (book.id === id) {
                    return { ...book, isRead: !book.isRead };
                }
                return book;
            })
        );
    }

    return (
        <div className="app">
            <Header />
            <Main
                handleChangeStatus={handleChangeStatus}
                handleAddBook={handleAddBook}
                handleDeleteBook={handleDeleteBook}
                books={books}
            />
            <Footer />
        </div>
    );
}

export default App;
