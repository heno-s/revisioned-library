import { useState } from "react";

export default function BookForm({ handleSubmit }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [isRead, setIsRead] = useState(false);
    const [id, setId] = useState(Math.random().toString(16).slice(2));

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

    function clearForm() {
        setTitle("");
        setAuthor("");
        setPages("");
        setIsRead(false);
        setId(Math.random().toString(16).slice(2));
    }

    return (
        <div className="form-container">
            <span className="book-form-title">new book</span>
            <form
                onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSubmit({
                        id,
                        title,
                        author,
                        pages,
                        isRead,
                    });
                    clearForm();
                }}
            >
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={handleTitleInput}
                    required
                />
                <input
                    type="text"
                    placeholder="author"
                    value={author}
                    onChange={handleAuthorInput}
                    required
                />
                <input
                    type="number"
                    placeholder="pages"
                    min="1"
                    value={pages}
                    onChange={handlePagesInput}
                    required
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
