export default function Book({ hasRead, title, author, pages }) {
    return (
        <div className="book">
            <div className="book-header">
                <button
                    className={`book-status ${
                        hasRead ? "active" : ""
                    }`}
                >
                    read
                </button>
                <button className="delete-book">x</button>
            </div>
            <div className="book-body">
                <span className="book-title">{title}</span>
                <span className="book-author">{author}</span>
            </div>
            <span className="book-pages">{pages}</span>
        </div>
    );
}
