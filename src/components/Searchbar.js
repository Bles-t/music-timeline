import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex justify-center items-center space-x-4 mb-8">
            <input
                type="text"
                className="form-input bg-white border-2 border-gold text-black rounded-lg px-4 py-2 w-2/3 focus:outline-none focus:ring focus:ring-gold"
                placeholder="Search for an artist..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                type="submit"
                className="bg-gold text-black font-semibold px-4 py-2 rounded-md hover:bg-black hover:text-gold transition duration-300"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
