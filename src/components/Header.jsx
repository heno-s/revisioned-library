import { useState } from "react";

export default function Header({ handleSearch }) {
    const [title, setTitle] = useState("");

    function handleSearchType(evt) {
        setTitle(evt.target.value);
        handleSearch(evt.target.value);
    }

    return (
        <header>
            <h1 className="app-title">Book's Library</h1>
            <div className="search">
                <span>search:</span>
                <div className="searchbox">
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={handleSearchType}
                    />
                </div>
            </div>
        </header>
    );
}
