import React, { useState } from 'react';
import { searchUsersByName } from '../services/UserServices';

function SearchList({ onSearch, setSearchResults, searchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchUsersByName(searchTerm);
      setSearchResults(data);
      onSearch(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };

  return (
    <div >
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative flex flex-col pr-5">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-3 h-3 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="block p-2 pl-10 text-xs text-gray-900 border border-gray-300 rounded-lg w-50 h-7 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for users"
        />
        <ul>
          {searchResults.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phone_number}</p>
          </div>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchList;
