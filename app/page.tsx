'use client';
import React, { useEffect, useState } from 'react';
import blogData from './helpers/BlogData'; // Import sample blog data
import PostCard from './components/PostCard';
import Pagination from './components/lookup/Pagination';
import Search from './components/lookup/Search';
import Link from 'next/link';
import { getAllPosts } from './helpers/getPosts';

const HomePage = ({ allPosts = blogData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const numPages = Math.ceil(allPosts.length / postsPerPage);

  useEffect(() => {
    // Reset page to 1 when allPosts change
    setCurrentPage(1);
  }, [allPosts]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">The Accessibility Blog</h1>
      <h6>The voice of the excluded</h6><br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {blogData.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}

      <Pagination currentPage={currentPage} numPages={numPages} />
      </div>
    </div>
  );
};


// export const getStaticProps = async () => {
//   const allPosts = blogData; // Fetch all blog posts
//   return {
//     props: { allPosts },
//   };
// };

export default HomePage;
