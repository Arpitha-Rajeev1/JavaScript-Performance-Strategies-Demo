import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      console.log("Fetching results for:", searchTerm);
      setResults([`Result for "${searchTerm}"`]);
    }, 1000),
    []
  );

  const onChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <h1>Debouncing Search Demo</h1>
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

export default Search;