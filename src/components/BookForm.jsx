export default function BookForm() {
    return (
        <div className="form-container">
            <span className="book-form-title">new book</span>
            <form>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="author" />
                <input type="number" placeholder="pages" min="1" />
                <div className="bottom-controls">
                    <div className="read-check">
                        <input type="checkbox" id="read-cb" />
                        <label htmlFor="read-cb">read</label>
                    </div>
                    <button>add</button>
                </div>
            </form>
        </div>
    );
}
