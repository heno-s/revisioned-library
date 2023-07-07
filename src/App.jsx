import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import useLocalStorage from "./components/useLocalStorage";
import "./style.css";

function App() {
    const [books, setBooks] = useLocalStorage("books", [
        {
            id: 1,
            title: "Harry Potter (Example 1)",
            author: "J. K. Rowling",
            pages: 285,
            isRead: false,
        },
        {
            id: 2,
            title: "Mary Poppins  (Example 2)",
            author: "P. L. Travers",
            pages: 300,
            isRead: true,
        },
    ]);
    const [displayedBooks, setDisplayedBooks] = useState(books);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if (searchText === "") {
            setDisplayedBooks([...books]);
        } else {
            setDisplayedBooks(
                books.filter((book) => {
                    const regexp = new RegExp(searchText, "i");
                    return regexp.test(book.title);
                })
            );
        }
    }, [searchText, books]);

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

    function handleSearch(title) {
        setSearchText(title);
    }

    return (
        <div className="app">
            <Header handleSearch={handleSearch} />
            <Main
                handleChangeStatus={handleChangeStatus}
                handleAddBook={handleAddBook}
                handleDeleteBook={handleDeleteBook}
                booksToDisplay={displayedBooks}
            />
            <Footer />
        </div>
    );
}

export default App;
