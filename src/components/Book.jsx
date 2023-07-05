export default function Book() {
    return (
        <div className="book">
            <div className="book-header">
                <div className="book-status">read</div>
                <div className="delete-book">x</div>
            </div>
            <div className="book-body">
                <span className="book-title">Harry Potter</span>
                <span className="book-author">J. K. Rowling</span>
            </div>
            <div className="book-footer">8</div>
        </div>
    );
}
