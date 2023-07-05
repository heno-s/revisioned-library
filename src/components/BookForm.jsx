import { useState } from "react";

export default function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [isRead, setIsRead] = useState(false);

    function handleTitleInput(evt) {
        setTitle(evt.target.value);
    }

    function handleAuthorInput(evt) {
        setAuthor(evt.target.value);
    }

    function handlePagesInput(evt) {
        setPages(evt.target.value);
    }

    function handleStatusToggle(evt) {
        setIsRead(evt.target.checked);
    }

    return (
        <div className="form-container">
            <span className="book-form-title">new book</span>
            <form>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={handleTitleInput}
                />
                <input
                    type="text"
                    placeholder="author"
                    value={author}
                    onChange={handleAuthorInput}
                />
                <input
                    type="number"
                    placeholder="pages"
                    min="1"
                    value={pages}
                    onChange={handlePagesInput}
                />
                <div className="bottom-controls">
                    <div className="read-check">
                        <input
                            type="checkbox"
                            id="read-cb"
                            checked={isRead}
                            onChange={handleStatusToggle}
                        />
                        <label htmlFor="read-cb">read</label>
                    </div>
                    <button>add</button>
                </div>
            </form>
        </div>
    );
}
