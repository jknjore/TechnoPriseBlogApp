'use client';
import React from 'react';
import { useParams } from 'next/navigation'
import Link from 'next/link';
import blogData from '../../helpers/blogData'; // Import sample blog data
import '../../styles/image.css'

//Dynamic route to handle /blog/{slug}
const PostPage = ({ params }) => {
    const { slug } = useParams()

  // Find the blog post with the matching slug
  const post = blogData.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
       <Link href="/">
          &lt; -- <span className="text-blue-800 mt-4 inline-block">Back to Homepage</span>
        </Link>

      <div className="bg-white rounded-lg shadow-md p-6 postdata">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1> 
      <p className="text-gray-600 mb-2">{post.date} <small style={{marginLeft:"50px"}}>5 min Read</small></p> <br />
      <img src={post.image} className='blogImageView' alt='Image Missing'/><br />
        
        
        <p className="text-gray-800">{post.content}</p>
       
      </div>
    </div>
  );
};

export default PostPage;
