export default function Book({
    handleDelete,
    id,
    isRead,
    title,
    author,
    pages,
}) {
    return (
        <div className="book">
            <div className="book-header">
                <button
                    className={`book-status ${
                        isRead ? "active" : ""
                    }`}
                >
                    read
                </button>
                <button
                    className="delete-book"
                    onClick={() => handleDelete(id)}
                >
                    x
                </button>
            </div>
            <div className="book-body">
                <span className="book-title">{title}</span>
                <span className="book-author">{author}</span>
            </div>
            <span className="book-pages">{pages}</span>
        </div>
    );
}
