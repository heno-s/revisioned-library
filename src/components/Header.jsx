export default function Header() {
    return (
        <header>
            <h1 className="app-title">Book's Library</h1>
            <div className="search">
                <span>search:</span>
                <div className="searchbox">
                    <input type="text" placeholder="title" />
                </div>
            </div>
        </header>
    );
}
