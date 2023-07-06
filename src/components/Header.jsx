import { useState } from "react";

export default function Header() {
    const [title, setTitle] = useState("");

    function handleTitleChange(evt) {
        setTitle(evt.target.value);
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
                        onChange={handleTitleChange}
                    />
                </div>
            </div>
        </header>
    );
}
