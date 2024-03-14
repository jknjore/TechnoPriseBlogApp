'use client';
import { getAllPosts } from '../../../helpers/getPosts';
import { useParams } from 'next/navigation'
import HomePage from '../../../page';
import Constants from '../../../helpers/Constants'; 


//Dynamic route to handle /blog/pages/{page}
export const BlogPage=async ({ params })=>
 {
  const page = parseInt(params.page, 10) || 1;
  const allPosts = getAllPosts();

  return(
    <>
    <HomePage page={page} />
    </>
  )
}


export default BlogPage;
