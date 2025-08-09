import { useState } from "react";

function SearchBar({ onSearch, initialValue = ""}) {


    const [value, setValue] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        const term = value.trim();
        if (!term) return;
        onSearch(term);
        



    };


return(
        <form className="search-section" onSubmit={handleSubmit}>
            <label htmlFor="city-input">Enter City or Zip Code:</label>
            <input id="city-input" type="text" placeholder="e.g, New York, 10001" value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" disabled={!value.trim()}>Search</button>

        </form>
    );
}

export default SearchBar;