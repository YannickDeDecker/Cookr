import React, { useState } from "react";
import "./SearchBar.css";
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
    const history = useHistory();
    const [query, setQuery] = useState('');

    const handleSubmit = async (details) => {
        history.push(`/search/${query}`);
    };

    const handleChange = async (event) => {
        setQuery(event.target.value);
    };
  
    return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          id="search-bar"
          type="search"
          placeholder="Zoek in recepten"
          aria-label="Search"
          value={query}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}
