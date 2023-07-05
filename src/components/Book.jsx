export default function Book() {
    return (
        <div className="book">
            <div className="book-header">
                <button className="book-status">read</button>
                <button className="delete-book">x</button>
            </div>
            <div className="book-body">
                <span className="book-title">Harry Potter</span>
                <span className="book-author">J. K. Rowling</span>
            </div>
            <div className="book-pages">8</div>
        </div>
    );
}
