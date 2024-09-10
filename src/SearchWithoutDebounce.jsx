// src/SearchWithoutDebounce.jsx
import { useState } from 'react';

const SearchWithoutDebounce = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (searchTerm) => {
    console.log("Fetching results for:", searchTerm);
    // Simulating an API call with a timeout
    setResults([`Result for "${searchTerm}"`]);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value); // No debouncing, updates immediately on every keystroke
  };

  return (
    <div>
      <h1>Search Without Debouncing</h1>
      <input 
        type="text" 
        placeholder="Type to search..." 
        value={query}
        onChange={onChange}
        style={{ padding: '8px', width: '300px', fontSize: '16px' }}
      />
      <div>
        {results.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchWithoutDebounce;