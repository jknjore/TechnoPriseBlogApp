import { useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import Constants from '../../helpers/Constants'; 


//A search component that provides a dropdown of suggestions. USer clicks on an item to move to full item details

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
    placeholder="Search blogs"
    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
    style={{width:"400px"}}
  />
  <ul
    id="dropdownMenu"
    className={searchResults.length == 0 ? "hidden absolute z-50 bg-white border border-gray-300 rounded mt-1 w-full shadow-lg" : "active absolute z-50 bg-white border border-gray-300 rounded mt-1 w-full shadow-lg"}
  >
   {searchResults.slice(0,Constants.POSTS_PER_SEARCH).map((post,index) => (
          <li key={index}>
            <Link href={`/blog/${post.slug}`} onClick={()=>clearInput()}>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer"><img src={post.image} className='searchImagePreview'/><small>{post.title}</small></li>
            </Link>
          </li>
        ))}
    
  </ul>
</div>
  );
};

export default Search
