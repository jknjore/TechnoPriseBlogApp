'use client';
import React, { useEffect, useRef, useState } from 'react';
import blogData from './helpers/BlogData'; // Import sample blog data
import PostCard from './components/PostCard';
import Pagination from './components/lookup/Pagination';
import Search from './components/lookup/Search';
import Link from 'next/link';
import { getAllPosts } from './helpers/getPosts';
import Constants from './helpers/Constants'; 

//This is the landing page of the app
const HomePage = ({ page=1}) => {
  const allPosts = blogData
  const currentPage=page;
  

  // Calculate current posts
  const indexOfLastPost = (currentPage) * Constants.POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - Constants.POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const originalPostsLength = getAllPosts().length

  const numPages =  originalPostsLength / Constants.POSTS_PER_PAGE;


  return (
    <div className="container mx-auto py-8 pb-48">
      <h1 className="text-3xl font-bold mb-4">The Accessibility Blog</h1>
      <h6>The voice of the excluded</h6><br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {currentPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}

      </div>


      <div className="py-32">
      <Pagination currentPage={currentPage} numPages={numPages} />
      </div>
    </div>
  );
};


export default HomePage;
