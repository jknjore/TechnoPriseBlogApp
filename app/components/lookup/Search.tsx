import { useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

const Search = ({ posts }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fuse = new Fuse(posts, {
    keys: ['title', 'content'],
  });

  const handleSearch = (event) => {
    const { value } = event.target;
    setQuery(value);

    if (value === '') {
      setSearchResults([]);
    } else {
      const results = fuse.search(value);
      setSearchResults(results.map(result => result.item));
    }
  };

  const clearInput=()=>
  {
    setQuery("");
    setSearchResults([]);
  }


  return (
<div className="relative">
  <input
   value={query} onChange={handleSearch}
    type="text"
    placeholder="Search"
    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
  />
  <ul
    id="dropdownMenu"
    className={searchResults.length == 0 ? "hidden absolute z-50 bg-white border border-gray-300 rounded mt-1 w-full shadow-lg" : "active absolute z-50 bg-white border border-gray-300 rounded mt-1 w-full shadow-lg"}
  >
   {searchResults.map((post,index) => (
          <li key={index}>
            <Link href={`/blog/${post.slug}`} onClick={()=>clearInput()}>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">{post.title}</li>
            </Link>
          </li>
        ))}
    
  </ul>
</div>
  );
};

export default Search
