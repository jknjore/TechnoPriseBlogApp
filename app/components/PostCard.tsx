import Link from 'next/link';
import React from 'react';
import '../styles/image.css'

//A component that displays information on a  particular blog
const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
    <Link href={`/blog/${post.slug}`}>
    <img src={post.image} className='blogImagePreview' alt='Image Missing'/><br />
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-2">{post.date}</p>
      <p className="text-gray-800">{post.content.substring(0, 150)}...</p>
      </Link>
    </div>
  );
};

export default PostCard;