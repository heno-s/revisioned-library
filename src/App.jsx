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

    return (
        <div className="app">
            <Header />
            <Main
                handleAddBook={handleAddBook}
                handleDeleteBook={handleDeleteBook}
                books={books}
            />
            <Footer />
        </div>
    );
}

export default App;
